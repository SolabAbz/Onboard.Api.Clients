# Onboard.Api.Client.CSharp - the C# library for the Onboard Api

No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)

This C# SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- SDK version: 1.0.0
- Build package: io.swagger.codegen.languages.CSharpClientCodegen

<a name="frameworks-supported"></a>
## Frameworks supported
- .NET Core >=1.0
- .NET Framework >=4.6
- Mono/Xamarin >=vNext
- UWP >=10.0

<a name="dependencies"></a>
## Dependencies
- FubarCoder.RestSharp.Portable.Core >=4.0.7
- FubarCoder.RestSharp.Portable.HttpClient >=4.0.7
- Newtonsoft.Json >=10.0.3

<a name="installation"></a>
## Installation
Generate the DLL using your preferred tool

Then include the DLL (under the `bin` folder) in the C# project, and use the namespaces:
```csharp
using Onboard.Api.Client.CSharp.Api;
using Onboard.Api.Client.CSharp.Client;
using Onboard.Api.Client.CSharp.Model;
```
<a name="getting-started"></a>
## Getting Started

```csharp
using System;
using System.Diagnostics;
using Onboard.Api.Client.CSharp.Api;
using Onboard.Api.Client.CSharp.Client;
using Onboard.Api.Client.CSharp.Model;

namespace Example
{
    public class Example
    {
        public void main()
        {

            // Configure OAuth2 access token for authorization: Bearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure API key authorization: Subscription_Key
            Configuration.Default.ApiKey.Add("Ocp-Apim-Subscription-Key", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.ApiKeyPrefix.Add("Ocp-Apim-Subscription-Key", "Bearer");
            // Configure API key authorization: Tenant_Id
            Configuration.Default.ApiKey.Add("X-Onboard-Tenant-Id", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.ApiKeyPrefix.Add("X-Onboard-Tenant-Id", "Bearer");

            var apiInstance = new CertificateApi();
            var id = id_example;  // string | 
            var query = new Query(); // Query |  (optional) 

            try
            {
                InlineResponse200 result = apiInstance.CertificateByIdGet(id, query);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CertificateApi.CertificateByIdGet: " + e.Message );
            }

        }
    }
}
```

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://solab.azure-api.net/onboard*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CertificateApi* | [**CertificateByIdGet**](docs/CertificateApi.md#certificatebyidget) | **GET** /certification/Certificate/{Id} | 
*CertificateApi* | [**CertificateGet**](docs/CertificateApi.md#certificateget) | **GET** /certification/Certificate | 
*PeopleApi* | [**PeopleByIdGet**](docs/PeopleApi.md#peoplebyidget) | **GET** /people/People/{Id} | 
*PeopleApi* | [**PeopleGet**](docs/PeopleApi.md#peopleget) | **GET** /people/People | 


<a name="documentation-for-models"></a>
## Documentation for Models

 - [Model.CertificationCertificateCertificationCategory](docs/CertificationCertificateCertificationCategory.md)
 - [Model.InlineResponse200](docs/InlineResponse200.md)
 - [Model.InlineResponse2001](docs/InlineResponse2001.md)
 - [Model.Query](docs/Query.md)
 - [Model.Query1](docs/Query1.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="Bearer"></a>
### Bearer

- **Type**: OAuth
- **Flow**: implicit
- **Authorization URL**: https://solababz.eu.auth0.com/authorize?audience&#x3D;https%3A%2F%2Fonboardtracker.portal.azure-api.net%2F
- **Scopes**: N/A

<a name="Subscription_Key"></a>
### Subscription_Key

- **Type**: API key
- **API key parameter name**: Ocp-Apim-Subscription-Key
- **Location**: HTTP header

<a name="Tenant_Id"></a>
### Tenant_Id

- **Type**: API key
- **API key parameter name**: X-Onboard-Tenant-Id
- **Location**: HTTP header
