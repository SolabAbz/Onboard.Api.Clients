/* 
 * Onboard Api
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using RestSharp.Portable;
using Onboard.Api.Client.CSharp.Client;
using Onboard.Api.Client.CSharp.Model;

namespace Onboard.Api.Client.CSharp.Api
{
    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface ICertificateApi : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Onboard.Api.Client.CSharp.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id"></param>
        /// <param name="query"> (optional)</param>
        /// <returns>InlineResponse200</returns>
        InlineResponse200 CertificateByIdGet (string id, Query query = null);

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Onboard.Api.Client.CSharp.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id"></param>
        /// <param name="query"> (optional)</param>
        /// <returns>ApiResponse of InlineResponse200</returns>
        ApiResponse<InlineResponse200> CertificateByIdGetWithHttpInfo (string id, Query query = null);
        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Onboard.Api.Client.CSharp.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>List&lt;InlineResponse200&gt;</returns>
        List<InlineResponse200> CertificateGet ();

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Onboard.Api.Client.CSharp.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>ApiResponse of List&lt;InlineResponse200&gt;</returns>
        ApiResponse<List<InlineResponse200>> CertificateGetWithHttpInfo ();
        #endregion Synchronous Operations
        #region Asynchronous Operations
        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Onboard.Api.Client.CSharp.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id"></param>
        /// <param name="query"> (optional)</param>
        /// <returns>Task of InlineResponse200</returns>
        System.Threading.Tasks.Task<InlineResponse200> CertificateByIdGetAsync (string id, Query query = null);

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Onboard.Api.Client.CSharp.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id"></param>
        /// <param name="query"> (optional)</param>
        /// <returns>Task of ApiResponse (InlineResponse200)</returns>
        System.Threading.Tasks.Task<ApiResponse<InlineResponse200>> CertificateByIdGetAsyncWithHttpInfo (string id, Query query = null);
        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Onboard.Api.Client.CSharp.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>Task of List&lt;InlineResponse200&gt;</returns>
        System.Threading.Tasks.Task<List<InlineResponse200>> CertificateGetAsync ();

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Onboard.Api.Client.CSharp.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>Task of ApiResponse (List&lt;InlineResponse200&gt;)</returns>
        System.Threading.Tasks.Task<ApiResponse<List<InlineResponse200>>> CertificateGetAsyncWithHttpInfo ();
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class CertificateApi : ICertificateApi
    {
        private Onboard.Api.Client.CSharp.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="CertificateApi"/> class.
        /// </summary>
        /// <returns></returns>
        public CertificateApi(String basePath)
        {
            this.Configuration = new Onboard.Api.Client.CSharp.Client.Configuration { BasePath = basePath };

            ExceptionFactory = Onboard.Api.Client.CSharp.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="CertificateApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public CertificateApi(Onboard.Api.Client.CSharp.Client.Configuration configuration = null)
        {
            if (configuration == null) // use the default one in Configuration
                this.Configuration = Onboard.Api.Client.CSharp.Client.Configuration.Default;
            else
                this.Configuration = configuration;

            ExceptionFactory = Onboard.Api.Client.CSharp.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Gets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        public String GetBasePath()
        {
            return this.Configuration.ApiClient.RestClient.BaseUrl.ToString();
        }

        /// <summary>
        /// Sets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        [Obsolete("SetBasePath is deprecated, please do 'Configuration.ApiClient = new ApiClient(\"http://new-path\")' instead.")]
        public void SetBasePath(String basePath)
        {
            // do nothing
        }

        /// <summary>
        /// Gets or sets the configuration object
        /// </summary>
        /// <value>An instance of the Configuration</value>
        public Onboard.Api.Client.CSharp.Client.Configuration Configuration {get; set;}

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public Onboard.Api.Client.CSharp.Client.ExceptionFactory ExceptionFactory
        {
            get
            {
                if (_exceptionFactory != null && _exceptionFactory.GetInvocationList().Length > 1)
                {
                    throw new InvalidOperationException("Multicast delegate for ExceptionFactory is unsupported.");
                }
                return _exceptionFactory;
            }
            set { _exceptionFactory = value; }
        }

        /// <summary>
        /// Gets the default header.
        /// </summary>
        /// <returns>Dictionary of HTTP header</returns>
        [Obsolete("DefaultHeader is deprecated, please use Configuration.DefaultHeader instead.")]
        public IDictionary<String, String> DefaultHeader()
        {
            return new ReadOnlyDictionary<string, string>(this.Configuration.DefaultHeader);
        }

        /// <summary>
        /// Add default header.
        /// </summary>
        /// <param name="key">Header field name.</param>
        /// <param name="value">Header field value.</param>
        /// <returns></returns>
        [Obsolete("AddDefaultHeader is deprecated, please use Configuration.AddDefaultHeader instead.")]
        public void AddDefaultHeader(string key, string value)
        {
            this.Configuration.AddDefaultHeader(key, value);
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="Onboard.Api.Client.CSharp.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id"></param>
        /// <param name="query"> (optional)</param>
        /// <returns>InlineResponse200</returns>
        public InlineResponse200 CertificateByIdGet (string id, Query query = null)
        {
             ApiResponse<InlineResponse200> localVarResponse = CertificateByIdGetWithHttpInfo(id, query);
             return localVarResponse.Data;
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="Onboard.Api.Client.CSharp.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id"></param>
        /// <param name="query"> (optional)</param>
        /// <returns>ApiResponse of InlineResponse200</returns>
        public ApiResponse< InlineResponse200 > CertificateByIdGetWithHttpInfo (string id, Query query = null)
        {
            // verify the required parameter 'id' is set
            if (id == null)
                throw new ApiException(400, "Missing required parameter 'id' when calling CertificateApi->CertificateByIdGet");

            var localVarPath = "./certification/Certificate/{Id}";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json-patch+json", 
                "application/json", 
                "text/json", 
                "application/_*+json"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (id != null) localVarPathParams.Add("Id", this.Configuration.ApiClient.ParameterToString(id)); // path parameter
            if (query != null && query.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(query); // http body (model) parameter
            }
            else
            {
                localVarPostBody = query; // byte array
            }

            // authentication (Bearer) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }
            // authentication (Subscription_Key) required
            if (!String.IsNullOrEmpty(this.Configuration.GetApiKeyWithPrefix("Ocp-Apim-Subscription-Key")))
            {
                localVarHeaderParams["Ocp-Apim-Subscription-Key"] = this.Configuration.GetApiKeyWithPrefix("Ocp-Apim-Subscription-Key");
            }
            // authentication (Tenant_Id) required
            if (!String.IsNullOrEmpty(this.Configuration.GetApiKeyWithPrefix("X-Onboard-Tenant-Id")))
            {
                localVarHeaderParams["X-Onboard-Tenant-Id"] = this.Configuration.GetApiKeyWithPrefix("X-Onboard-Tenant-Id");
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) this.Configuration.ApiClient.CallApi(localVarPath,
                Method.GET, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("CertificateByIdGet", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<InlineResponse200>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Key, x => x.Value.ToString()),
                (InlineResponse200) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(InlineResponse200)));
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="Onboard.Api.Client.CSharp.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id"></param>
        /// <param name="query"> (optional)</param>
        /// <returns>Task of InlineResponse200</returns>
        public async System.Threading.Tasks.Task<InlineResponse200> CertificateByIdGetAsync (string id, Query query = null)
        {
             ApiResponse<InlineResponse200> localVarResponse = await CertificateByIdGetAsyncWithHttpInfo(id, query);
             return localVarResponse.Data;

        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="Onboard.Api.Client.CSharp.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id"></param>
        /// <param name="query"> (optional)</param>
        /// <returns>Task of ApiResponse (InlineResponse200)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<InlineResponse200>> CertificateByIdGetAsyncWithHttpInfo (string id, Query query = null)
        {
            // verify the required parameter 'id' is set
            if (id == null)
                throw new ApiException(400, "Missing required parameter 'id' when calling CertificateApi->CertificateByIdGet");

            var localVarPath = "./certification/Certificate/{Id}";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json-patch+json", 
                "application/json", 
                "text/json", 
                "application/_*+json"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (id != null) localVarPathParams.Add("Id", this.Configuration.ApiClient.ParameterToString(id)); // path parameter
            if (query != null && query.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(query); // http body (model) parameter
            }
            else
            {
                localVarPostBody = query; // byte array
            }

            // authentication (Bearer) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }
            // authentication (Subscription_Key) required
            if (!String.IsNullOrEmpty(this.Configuration.GetApiKeyWithPrefix("Ocp-Apim-Subscription-Key")))
            {
                localVarHeaderParams["Ocp-Apim-Subscription-Key"] = this.Configuration.GetApiKeyWithPrefix("Ocp-Apim-Subscription-Key");
            }
            // authentication (Tenant_Id) required
            if (!String.IsNullOrEmpty(this.Configuration.GetApiKeyWithPrefix("X-Onboard-Tenant-Id")))
            {
                localVarHeaderParams["X-Onboard-Tenant-Id"] = this.Configuration.GetApiKeyWithPrefix("X-Onboard-Tenant-Id");
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await this.Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.GET, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("CertificateByIdGet", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<InlineResponse200>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Key, x => x.Value.ToString()),
                (InlineResponse200) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(InlineResponse200)));
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="Onboard.Api.Client.CSharp.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>List&lt;InlineResponse200&gt;</returns>
        public List<InlineResponse200> CertificateGet ()
        {
             ApiResponse<List<InlineResponse200>> localVarResponse = CertificateGetWithHttpInfo();
             return localVarResponse.Data;
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="Onboard.Api.Client.CSharp.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>ApiResponse of List&lt;InlineResponse200&gt;</returns>
        public ApiResponse< List<InlineResponse200> > CertificateGetWithHttpInfo ()
        {

            var localVarPath = "./certification/Certificate";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);


            // authentication (Bearer) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }
            // authentication (Subscription_Key) required
            if (!String.IsNullOrEmpty(this.Configuration.GetApiKeyWithPrefix("Ocp-Apim-Subscription-Key")))
            {
                localVarHeaderParams["Ocp-Apim-Subscription-Key"] = this.Configuration.GetApiKeyWithPrefix("Ocp-Apim-Subscription-Key");
            }
            // authentication (Tenant_Id) required
            if (!String.IsNullOrEmpty(this.Configuration.GetApiKeyWithPrefix("X-Onboard-Tenant-Id")))
            {
                localVarHeaderParams["X-Onboard-Tenant-Id"] = this.Configuration.GetApiKeyWithPrefix("X-Onboard-Tenant-Id");
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) this.Configuration.ApiClient.CallApi(localVarPath,
                Method.GET, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("CertificateGet", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<List<InlineResponse200>>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Key, x => x.Value.ToString()),
                (List<InlineResponse200>) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(List<InlineResponse200>)));
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="Onboard.Api.Client.CSharp.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>Task of List&lt;InlineResponse200&gt;</returns>
        public async System.Threading.Tasks.Task<List<InlineResponse200>> CertificateGetAsync ()
        {
             ApiResponse<List<InlineResponse200>> localVarResponse = await CertificateGetAsyncWithHttpInfo();
             return localVarResponse.Data;

        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="Onboard.Api.Client.CSharp.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>Task of ApiResponse (List&lt;InlineResponse200&gt;)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<List<InlineResponse200>>> CertificateGetAsyncWithHttpInfo ()
        {

            var localVarPath = "./certification/Certificate";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);


            // authentication (Bearer) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }
            // authentication (Subscription_Key) required
            if (!String.IsNullOrEmpty(this.Configuration.GetApiKeyWithPrefix("Ocp-Apim-Subscription-Key")))
            {
                localVarHeaderParams["Ocp-Apim-Subscription-Key"] = this.Configuration.GetApiKeyWithPrefix("Ocp-Apim-Subscription-Key");
            }
            // authentication (Tenant_Id) required
            if (!String.IsNullOrEmpty(this.Configuration.GetApiKeyWithPrefix("X-Onboard-Tenant-Id")))
            {
                localVarHeaderParams["X-Onboard-Tenant-Id"] = this.Configuration.GetApiKeyWithPrefix("X-Onboard-Tenant-Id");
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await this.Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.GET, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("CertificateGet", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<List<InlineResponse200>>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Key, x => x.Value.ToString()),
                (List<InlineResponse200>) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(List<InlineResponse200>)));
        }

    }
}
