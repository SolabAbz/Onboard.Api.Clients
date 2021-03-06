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


export interface InlineResponse2001 { 
    personId?: number;
    userGuid?: string;
    continuousServiceDate?: Date;
    title?: string;
    firstName?: string;
    middleName?: string;
    surname?: string;
    hasProfileImage?: boolean;
    maidenName?: string;
    teamId?: number;
    knownAs?: string;
    payrollNumber?: string;
    vantageNumber?: string;
    irataNumber?: string;
    costCentreId?: number;
    phone?: string;
    personalPhone?: string;
    skypeId?: string;
    mobile?: string;
    personalMobile?: string;
    maritalStatus?: InlineResponse2001.MaritalStatusEnum;
    email?: string;
    homeEmail?: string;
    homeAirport?: string;
    homeTrainStation?: string;
    travelPreferences?: string;
    gender?: InlineResponse2001.GenderEnum;
    nationalInsuranceNumber?: string;
    altInsuranceNumber?: string;
    dateOfBirth?: Date;
    placeOfBirth?: string;
    joinDate?: Date;
    leaveDate?: Date;
    firstJoinedDate?: Date;
    weeklyHours?: number;
    jobTitle?: string;
    contractType?: InlineResponse2001.ContractTypeEnum;
    annualWorkDays?: number;
    holidayEntitlement?: number;
    holidayCarryOver?: number;
    notes?: string;
    certificationNotes?: string;
    workwearSize?: string;
    shoeSize?: string;
    harnessSize?: string;
    isCurrentlyEmployed?: boolean;
    idCard?: string;
    timeStamp?: string;
    groupId?: string;
}
export namespace InlineResponse2001 {
    export type MaritalStatusEnum = 'Single' | 'Married' | 'Widowed' | 'Separated' | 'Divorced' | 'CivilPartnership' | 'Partner';
    export const MaritalStatusEnum = {
        Single: 'Single' as MaritalStatusEnum,
        Married: 'Married' as MaritalStatusEnum,
        Widowed: 'Widowed' as MaritalStatusEnum,
        Separated: 'Separated' as MaritalStatusEnum,
        Divorced: 'Divorced' as MaritalStatusEnum,
        CivilPartnership: 'CivilPartnership' as MaritalStatusEnum,
        Partner: 'Partner' as MaritalStatusEnum
    }
    export type GenderEnum = 'Male' | 'Female';
    export const GenderEnum = {
        Male: 'Male' as GenderEnum,
        Female: 'Female' as GenderEnum
    }
    export type ContractTypeEnum = 'Permanent' | 'FixedTerm' | 'Other' | 'Contracted' | 'AgencyWorker';
    export const ContractTypeEnum = {
        Permanent: 'Permanent' as ContractTypeEnum,
        FixedTerm: 'FixedTerm' as ContractTypeEnum,
        Other: 'Other' as ContractTypeEnum,
        Contracted: 'Contracted' as ContractTypeEnum,
        AgencyWorker: 'AgencyWorker' as ContractTypeEnum
    }
}
