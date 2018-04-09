#Requires -Version 5
<#
.SYNOPSIS
	<Overview of script>

.DESCRIPTION
	<Brief description of script>

.PARAMETER <Parameter_Name>
		<Brief description of parameter input required. Repeat this attribute if required>

.INPUTS
	<Inputs if any, otherwise state None>

.OUTPUTS
	<Outputs if any, otherwise state None - example: Log file stored in C:\Windows\Temp\<name>.log>

.NOTES
	Version:        1.0
	Author:         Darren Maddox
	Creation Date:  04/04/18
	Purpose/Change: Initial script development
	
.EXAMPLE
	<Example goes here. Repeat this attribute for more than one example>
#>

#---------------------------------------------------------[Initialisations]--------------------------------------------------------


#----------------------------------------------------------[Declarations]----------------------------------------------------------

$swaggerUri = "https://solab.azure-api.net/onboard/swagger"
$definition = "swagger-definition.json"

$apiKey = $Env:ApiKey;
$gitKey = $Env:GitKey;

if (!$apiKey) {
    Write-Error "Api key was not found.  Please ensure the environmental variable is set."
    return;
}

#Set Error Action to Silently Continue
$ErrorActionPreference = "SilentlyContinue"

#-----------------------------------------------------------[Functions]------------------------------------------------------------

Function Clean {
    Param($output)
	
    Begin {
        Write-Host "Cleaning $output"
    }
	
    Process {
        # Get-ChildItem -Path $output | Remove-Item -Recurse
    }
	
    End {
        Write-Host "Cleaned $output"
    }
}

function Get-SwaggerDefinition {
    Invoke-WebRequest -Uri $swaggerUri -OutFile $definition -Headers @{ "Ocp-Apim-Subscription-Key" = "ebffd127154540b094968112ada83bd4" }
}

Function New-ApiClient {
    Param(
        [Parameter(Mandatory = $true)]
        [String]$output,
            
        [Parameter(Mandatory = $true)]
        [String]$language,
            
        [String]$config
    )
    
    Clean $output

    $args = "-jar swagger-codegen.jar generate -l $language -o $output -i $definition"
    
    if ($config) {
        $args += " -c $config"
    }
    
    $args += " -Dio.swagger.parser.util.RemoteUrl.trustAll=true"
    
    Start-Process  `
        -FilePath java `
        -PassThru `
        -NoNewWindow `
        -Wait `
        -ArgumentList $args
}

Function New-AssemblyInfo {
    Param(
        [Parameter(Mandatory = $true)]
        [String]$version
    )

    return "
        using System.Reflection;
        using System.Runtime.InteropServices;

        [assembly: AssemblyTitle(`"Onboard Api`")]
        [assembly: AssemblyDescription(`"A C# client for interfacing with an Onboard tenants data.`")]
        [assembly: AssemblyConfiguration(`"`")]
        [assembly: AssemblyCompany(`"Solab`")]
        [assembly: AssemblyProduct(`"Onboard Api`")]
        [assembly: AssemblyCopyright(`"MIT`")]
        [assembly: AssemblyTrademark(`"`")]
        [assembly: AssemblyCulture(`"`")]
        [assembly: ComVisible(false)]
        [assembly: AssemblyVersion(`"$version`")]
        [assembly: AssemblyFileVersion(`"$version`")]"
}
#-----------------------------------------------------------[Execution]------------------------------------------------------------

Write-Host "Downloading File..."
Get-SwaggerDefinition

Write-Host "Generating clients..."
New-ApiClient -output 'csharp/.netstandard1.3' -language 'csharp' -config '.\CSharp\.netstandard1.3\Config.json'
New-ApiClient -output 'typescript/typescript-angular' -language 'typescript-angular'
New-ApiClient -output 'typescript/typescript-jquery' -language 'typescript-jquery'

Write-Host "Cleaning up..."
Remove-Item $definition

# Does not deal with multiple branches
Write-Host "Updating version"
Set-Location .\Typescript\typescript-angular\
$version = npm version minor
$version = $version.Trim("v")

Set-Location .\..\typescript-jquery\
npm version $version

Set-Location ./../../CSharp/.netstandard1.3/src/Onboard.Api.Client.CSharp/Properties/
New-AssemblyInfo $version | Out-File -FilePath "AssemblyInfo.cs"

git config user.email "devteam@solab.co.uk"
git config user.name "Solab Bot"

git add .
git commit -m "Automatic commit.  The clients have been regenerated."
git remote set-url origin "https://solab-bot:$gitKey@github.com/SolabAbz/Onboard.Api.Clients.git"
git push origin HEAD:master
