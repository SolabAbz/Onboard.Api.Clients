# Onboard.Api.Client.CSharp.Api.CertificateApi

All URIs are relative to *https://solab.azure-api.net/onboard*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CertificateByIdGet**](CertificateApi.md#certificatebyidget) | **GET** /certification/Certificate/{Id} | 
[**CertificateGet**](CertificateApi.md#certificateget) | **GET** /certification/Certificate | 


<a name="certificatebyidget"></a>
# **CertificateByIdGet**
> InlineResponse200 CertificateByIdGet (string id, Query query = null)



### Example
```csharp
using System;
using System.Diagnostics;
using Onboard.Api.Client.CSharp.Api;
using Onboard.Api.Client.CSharp.Client;
using Onboard.Api.Client.CSharp.Model;

namespace Example
{
    public class CertificateByIdGetExample
    {
        public void main()
        {
            // Configure OAuth2 access token for authorization: Bearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure API key authorization: Subscription_Key
            Configuration.Default.AddApiKey("Ocp-Apim-Subscription-Key", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("Ocp-Apim-Subscription-Key", "Bearer");
            // Configure API key authorization: Tenant_Id
            Configuration.Default.AddApiKey("X-Onboard-Tenant-Id", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("X-Onboard-Tenant-Id", "Bearer");

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**|  | 
 **query** | [**Query**](Query.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[Bearer](../README.md#Bearer), [Subscription_Key](../README.md#Subscription_Key), [Tenant_Id](../README.md#Tenant_Id)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="certificateget"></a>
# **CertificateGet**
> List<InlineResponse200> CertificateGet ()



### Example
```csharp
using System;
using System.Diagnostics;
using Onboard.Api.Client.CSharp.Api;
using Onboard.Api.Client.CSharp.Client;
using Onboard.Api.Client.CSharp.Model;

namespace Example
{
    public class CertificateGetExample
    {
        public void main()
        {
            // Configure OAuth2 access token for authorization: Bearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure API key authorization: Subscription_Key
            Configuration.Default.AddApiKey("Ocp-Apim-Subscription-Key", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("Ocp-Apim-Subscription-Key", "Bearer");
            // Configure API key authorization: Tenant_Id
            Configuration.Default.AddApiKey("X-Onboard-Tenant-Id", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("X-Onboard-Tenant-Id", "Bearer");

            var apiInstance = new CertificateApi();

            try
            {
                List&lt;InlineResponse200&gt; result = apiInstance.CertificateGet();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CertificateApi.CertificateGet: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<InlineResponse200>**](InlineResponse200.md)

### Authorization

[Bearer](../README.md#Bearer), [Subscription_Key](../README.md#Subscription_Key), [Tenant_Id](../README.md#Tenant_Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

