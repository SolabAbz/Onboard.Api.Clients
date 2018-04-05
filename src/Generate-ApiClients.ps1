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

$swaggerUri = "http://solab.azure-api.net/onboard/swagger"
$definition = "swagger-definition.json"
$apiKey = $Env:ApiKey;

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
#-----------------------------------------------------------[Execution]------------------------------------------------------------

Write-Host "Downloading File..."
Get-SwaggerDefinition

Write-Host "Generating clients..."
New-ApiClient -output 'csharp/.netstandard1.3' -language 'csharp' -config '.\CSharp\.netstandard1.3\Config.json'
New-ApiClient -output 'typescript/typescript-fetch' -language 'typescript-fetch'
New-ApiClient -output 'typescript/typescript-angular' -language 'typescript-angular'
New-ApiClient -output 'typescript/typescript-jquery' -language 'typescript-jquery'

Write-Host "Cleaning up..."
Remove-Item $definition

git add .
git commit -m "Automatic commit.  The clients have been regenerated."
git push
