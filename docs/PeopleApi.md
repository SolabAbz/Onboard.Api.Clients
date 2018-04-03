# Onboard.Api.Client.CSharp.Api.PeopleApi

All URIs are relative to *http://onboardapipeople.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**PeopleByIdGet**](PeopleApi.md#peoplebyidget) | **GET** /People/{Id} | 
[**PeopleGet**](PeopleApi.md#peopleget) | **GET** /People | 


<a name="peoplebyidget"></a>
# **PeopleByIdGet**
> Person PeopleByIdGet (string id, string xOnboardTenantId, ReadPersonQuery query = null)



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

            var apiInstance = new PeopleApi();
            var id = id_example;  // string | 
            var xOnboardTenantId = xOnboardTenantId_example;  // string | 
            var query = new ReadPersonQuery(); // ReadPersonQuery |  (optional) 

            try
            {
                Person result = apiInstance.PeopleByIdGet(id, xOnboardTenantId, query);
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
 **xOnboardTenantId** | **string**|  | 
 **query** | [**ReadPersonQuery**](ReadPersonQuery.md)|  | [optional] 

### Return type

[**Person**](Person.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="peopleget"></a>
# **PeopleGet**
> List<Person> PeopleGet (string xOnboardTenantId)



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

            var apiInstance = new PeopleApi();
            var xOnboardTenantId = xOnboardTenantId_example;  // string | 

            try
            {
                List&lt;Person&gt; result = apiInstance.PeopleGet(xOnboardTenantId);
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

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xOnboardTenantId** | **string**|  | 

### Return type

[**List<Person>**](Person.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

