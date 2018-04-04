# Onboard.Api.Client.CSharp.Api.PeopleApi

All URIs are relative to *https://solab.azure-api.net/onboard*

Method | HTTP request | Description
------------- | ------------- | -------------
[**PeopleByIdGet**](PeopleApi.md#peoplebyidget) | **GET** /people/People/{Id} | 
[**PeopleGet**](PeopleApi.md#peopleget) | **GET** /people/People | 


<a name="peoplebyidget"></a>
# **PeopleByIdGet**
> InlineResponse2001 PeopleByIdGet (string id, Query1 query = null)



### Example
```csharp
using System;
using System.Diagnostics;
using Onboard.Api.Client.CSharp.Api;
using Onboard.Api.Client.CSharp.Client;
using Onboard.Api.Client.CSharp.Model;

namespace Example
{
    public class PeopleByIdGetExample
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

            var apiInstance = new PeopleApi();
            var id = id_example;  // string | 
            var query = new Query1(); // Query1 |  (optional) 

            try
            {
                InlineResponse2001 result = apiInstance.PeopleByIdGet(id, query);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling PeopleApi.PeopleByIdGet: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**|  | 
 **query** | [**Query1**](Query1.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[Bearer](../README.md#Bearer), [Subscription_Key](../README.md#Subscription_Key), [Tenant_Id](../README.md#Tenant_Id)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="peopleget"></a>
# **PeopleGet**
> List<InlineResponse2001> PeopleGet ()



### Example
```csharp
using System;
using System.Diagnostics;
using Onboard.Api.Client.CSharp.Api;
using Onboard.Api.Client.CSharp.Client;
using Onboard.Api.Client.CSharp.Model;

namespace Example
{
    public class PeopleGetExample
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

            var apiInstance = new PeopleApi();

            try
            {
                List&lt;InlineResponse2001&gt; result = apiInstance.PeopleGet();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling PeopleApi.PeopleGet: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<InlineResponse2001>**](InlineResponse2001.md)

### Authorization

[Bearer](../README.md#Bearer), [Subscription_Key](../README.md#Subscription_Key), [Tenant_Id](../README.md#Tenant_Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

