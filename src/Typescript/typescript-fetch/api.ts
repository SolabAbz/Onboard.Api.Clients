/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * Onboard Api
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


import * as url from "url";
import * as portableFetch from "portable-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "https://solab.azure-api.net/onboard".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *  
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 * 
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = portableFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 * 
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 * @interface CertificationCertificateCertificationCategory
 */
export interface CertificationCertificateCertificationCategory {
    /**
     * 
     * @type {number}
     * @memberof CertificationCertificateCertificationCategory
     */
    certificationCategoryId?: number;
    /**
     * 
     * @type {string}
     * @memberof CertificationCertificateCertificationCategory
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CertificationCertificateCertificationCategory
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof CertificationCertificateCertificationCategory
     */
    listOrder?: number;
}

/**
 * 
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200
     */
    certificationId?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200
     */
    groupId?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200
     */
    validityPeriod?: number;
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse200
     */
    requiresExpiryDate?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse200
     */
    matrixCertification?: boolean;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200
     */
    listOrder?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200
     */
    certificationCategoryId?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200
     */
    trainingCourseLength?: number;
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse200
     */
    isCoreMobilisation?: boolean;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200
     */
    trainingCost?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200
     */
    timeStamp?: string;
    /**
     * 
     * @type {CertificationCertificateCertificationCategory}
     * @memberof InlineResponse200
     */
    certificationCategory?: CertificationCertificateCertificationCategory;
}

/**
 * 
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2001
     */
    personId?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    userGuid?: string;
    /**
     * 
     * @type {Date}
     * @memberof InlineResponse2001
     */
    continuousServiceDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    middleName?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    surname?: string;
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse2001
     */
    hasProfileImage?: boolean;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    maidenName?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2001
     */
    teamId?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    knownAs?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    payrollNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    vantageNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    irataNumber?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2001
     */
    costCentreId?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    personalPhone?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    skypeId?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    mobile?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    personalMobile?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    maritalStatus?: InlineResponse2001.MaritalStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    homeEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    homeAirport?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    homeTrainStation?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    travelPreferences?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    gender?: InlineResponse2001.GenderEnum;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    nationalInsuranceNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    altInsuranceNumber?: string;
    /**
     * 
     * @type {Date}
     * @memberof InlineResponse2001
     */
    dateOfBirth?: Date;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    placeOfBirth?: string;
    /**
     * 
     * @type {Date}
     * @memberof InlineResponse2001
     */
    joinDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof InlineResponse2001
     */
    leaveDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof InlineResponse2001
     */
    firstJoinedDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2001
     */
    weeklyHours?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    jobTitle?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    contractType?: InlineResponse2001.ContractTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2001
     */
    annualWorkDays?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2001
     */
    holidayEntitlement?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2001
     */
    holidayCarryOver?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    notes?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    certificationNotes?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    workwearSize?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    shoeSize?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    harnessSize?: string;
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse2001
     */
    isCurrentlyEmployed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    idCard?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    timeStamp?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    groupId?: string;
}

/**
 * @export
 * @namespace InlineResponse2001
 */
export namespace InlineResponse2001 {
    /**
     * @export
     * @enum {string}
     */
    export enum MaritalStatusEnum {
        Single = <any> 'Single',
        Married = <any> 'Married',
        Widowed = <any> 'Widowed',
        Separated = <any> 'Separated',
        Divorced = <any> 'Divorced',
        CivilPartnership = <any> 'CivilPartnership',
        Partner = <any> 'Partner'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum GenderEnum {
        Male = <any> 'Male',
        Female = <any> 'Female'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum ContractTypeEnum {
        Permanent = <any> 'Permanent',
        FixedTerm = <any> 'FixedTerm',
        Other = <any> 'Other',
        Contracted = <any> 'Contracted',
        AgencyWorker = <any> 'AgencyWorker'
    }
}

/**
 * 
 * @export
 * @interface Query
 */
export interface Query {
    /**
     * 
     * @type {string}
     * @memberof Query
     */
    id?: string;
}

/**
 * 
 * @export
 * @interface Query1
 */
export interface Query1 {
    /**
     * 
     * @type {string}
     * @memberof Query1
     */
    id?: string;
}


/**
 * CertificateApi - fetch parameter creator
 * @export
 */
export const CertificateApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} id 
         * @param {Query} [query] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        certificateByIdGet(id: string, query?: Query, options: any = {}): FetchArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling certificateByIdGet.');
            }
            const localVarPath = `/certification/Certificate/{Id}`
                .replace(`{${"Id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // oauth required
            if (configuration && configuration.accessToken) {
				const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
					? configuration.accessToken("Bearer", [])
					: configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication Subscription_Key required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
					? configuration.apiKey("Ocp-Apim-Subscription-Key")
					: configuration.apiKey;
                localVarHeaderParameter["Ocp-Apim-Subscription-Key"] = localVarApiKeyValue;
            }

            // authentication Tenant_Id required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
					? configuration.apiKey("X-Onboard-Tenant-Id")
					: configuration.apiKey;
                localVarHeaderParameter["X-Onboard-Tenant-Id"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"Query" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(query || {}) : (query || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        certificateGet(options: any = {}): FetchArgs {
            const localVarPath = `/certification/Certificate`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // oauth required
            if (configuration && configuration.accessToken) {
				const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
					? configuration.accessToken("Bearer", [])
					: configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication Subscription_Key required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
					? configuration.apiKey("Ocp-Apim-Subscription-Key")
					: configuration.apiKey;
                localVarHeaderParameter["Ocp-Apim-Subscription-Key"] = localVarApiKeyValue;
            }

            // authentication Tenant_Id required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
					? configuration.apiKey("X-Onboard-Tenant-Id")
					: configuration.apiKey;
                localVarHeaderParameter["X-Onboard-Tenant-Id"] = localVarApiKeyValue;
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CertificateApi - functional programming interface
 * @export
 */
export const CertificateApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} id 
         * @param {Query} [query] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        certificateByIdGet(id: string, query?: Query, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200> {
            const localVarFetchArgs = CertificateApiFetchParamCreator(configuration).certificateByIdGet(id, query, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        certificateGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<InlineResponse200>> {
            const localVarFetchArgs = CertificateApiFetchParamCreator(configuration).certificateGet(options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * CertificateApi - factory interface
 * @export
 */
export const CertificateApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @param {string} id 
         * @param {Query} [query] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        certificateByIdGet(id: string, query?: Query, options?: any) {
            return CertificateApiFp(configuration).certificateByIdGet(id, query, options)(fetch, basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        certificateGet(options?: any) {
            return CertificateApiFp(configuration).certificateGet(options)(fetch, basePath);
        },
    };
};

/**
 * CertificateApi - object-oriented interface
 * @export
 * @class CertificateApi
 * @extends {BaseAPI}
 */
export class CertificateApi extends BaseAPI {
    /**
     * 
     * @param {string} id 
     * @param {Query} [query] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CertificateApi
     */
    public certificateByIdGet(id: string, query?: Query, options?: any) {
        return CertificateApiFp(this.configuration).certificateByIdGet(id, query, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CertificateApi
     */
    public certificateGet(options?: any) {
        return CertificateApiFp(this.configuration).certificateGet(options)(this.fetch, this.basePath);
    }

}

/**
 * PeopleApi - fetch parameter creator
 * @export
 */
export const PeopleApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} id 
         * @param {Query1} [query] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        peopleByIdGet(id: string, query?: Query1, options: any = {}): FetchArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling peopleByIdGet.');
            }
            const localVarPath = `/people/People/{Id}`
                .replace(`{${"Id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // oauth required
            if (configuration && configuration.accessToken) {
				const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
					? configuration.accessToken("Bearer", [])
					: configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication Subscription_Key required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
					? configuration.apiKey("Ocp-Apim-Subscription-Key")
					: configuration.apiKey;
                localVarHeaderParameter["Ocp-Apim-Subscription-Key"] = localVarApiKeyValue;
            }

            // authentication Tenant_Id required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
					? configuration.apiKey("X-Onboard-Tenant-Id")
					: configuration.apiKey;
                localVarHeaderParameter["X-Onboard-Tenant-Id"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"Query1" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(query || {}) : (query || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        peopleGet(options: any = {}): FetchArgs {
            const localVarPath = `/people/People`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // oauth required
            if (configuration && configuration.accessToken) {
				const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
					? configuration.accessToken("Bearer", [])
					: configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication Subscription_Key required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
					? configuration.apiKey("Ocp-Apim-Subscription-Key")
					: configuration.apiKey;
                localVarHeaderParameter["Ocp-Apim-Subscription-Key"] = localVarApiKeyValue;
            }

            // authentication Tenant_Id required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
					? configuration.apiKey("X-Onboard-Tenant-Id")
					: configuration.apiKey;
                localVarHeaderParameter["X-Onboard-Tenant-Id"] = localVarApiKeyValue;
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PeopleApi - functional programming interface
 * @export
 */
export const PeopleApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} id 
         * @param {Query1} [query] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        peopleByIdGet(id: string, query?: Query1, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2001> {
            const localVarFetchArgs = PeopleApiFetchParamCreator(configuration).peopleByIdGet(id, query, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        peopleGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<InlineResponse2001>> {
            const localVarFetchArgs = PeopleApiFetchParamCreator(configuration).peopleGet(options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * PeopleApi - factory interface
 * @export
 */
export const PeopleApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @param {string} id 
         * @param {Query1} [query] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        peopleByIdGet(id: string, query?: Query1, options?: any) {
            return PeopleApiFp(configuration).peopleByIdGet(id, query, options)(fetch, basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        peopleGet(options?: any) {
            return PeopleApiFp(configuration).peopleGet(options)(fetch, basePath);
        },
    };
};

/**
 * PeopleApi - object-oriented interface
 * @export
 * @class PeopleApi
 * @extends {BaseAPI}
 */
export class PeopleApi extends BaseAPI {
    /**
     * 
     * @param {string} id 
     * @param {Query1} [query] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleApi
     */
    public peopleByIdGet(id: string, query?: Query1, options?: any) {
        return PeopleApiFp(this.configuration).peopleByIdGet(id, query, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleApi
     */
    public peopleGet(options?: any) {
        return PeopleApiFp(this.configuration).peopleGet(options)(this.fetch, this.basePath);
    }

}

