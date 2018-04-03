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
  Author:         <Name>
  Creation Date:  <Date>
  Purpose/Change: Initial script development
  
.EXAMPLE
  <Example goes here. Repeat this attribute for more than one example>
#>

#---------------------------------------------------------[Initialisations]--------------------------------------------------------


#----------------------------------------------------------[Declarations]----------------------------------------------------------

Param(
	[Parameter(Mandatory = $true)]
	[String]$swaggerJar,

	[Parameter(Mandatory = $true)]
    [String]$output,
    
	[Parameter(Mandatory = $true)]
	[String]$language,

	[Parameter(Mandatory = $true)]
	[String]$config,

	[Parameter(Mandatory = $true)]
	[String]$swaggerUri
)

#Set Error Action to Silently Continue
$ErrorActionPreference = "SilentlyContinue"

#-----------------------------------------------------------[Functions]------------------------------------------------------------

Function Clean{
  Param($output)
  
  Begin{
    Write-Host "Cleaning $output"
  }
  
  Process{
    # Get-ChildItem -Path $output | Remove-Item -Recurse
  }
  
  End{
    Write-Host "Cleaned $output"
  }
}

#-----------------------------------------------------------[Execution]------------------------------------------------------------

Clean($output)

Start-Process  `
    -FilePath java `
    -PassThru `
    -NoNewWindow `
    -Wait `
    -ArgumentList "-jar $swaggerJar generate -i $swaggerUri -l $language -o $output -c $config -Dio.swagger.parser.util.RemoteUrl.trustAll=true"