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
using System.Linq;
using System.IO;
using System.Text;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using SwaggerDateConverter = Onboard.Api.Client.CSharp.Client.SwaggerDateConverter;

namespace Onboard.Api.Client.CSharp.Model
{
    /// <summary>
    /// CertificationCertificateCertificationCategory
    /// </summary>
    [DataContract]
    public partial class CertificationCertificateCertificationCategory :  IEquatable<CertificationCertificateCertificationCategory>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CertificationCertificateCertificationCategory" /> class.
        /// </summary>
        /// <param name="certificationCategoryId">certificationCategoryId.</param>
        /// <param name="name">name.</param>
        /// <param name="description">description.</param>
        /// <param name="listOrder">listOrder.</param>
        public CertificationCertificateCertificationCategory(int? certificationCategoryId = default(int?), string name = default(string), string description = default(string), int? listOrder = default(int?))
        {
            this.CertificationCategoryId = certificationCategoryId;
            this.Name = name;
            this.Description = description;
            this.ListOrder = listOrder;
        }
        
        /// <summary>
        /// Gets or Sets CertificationCategoryId
        /// </summary>
        [DataMember(Name="certificationCategoryId", EmitDefaultValue=false)]
        public int? CertificationCategoryId { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name="name", EmitDefaultValue=false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name="description", EmitDefaultValue=false)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets ListOrder
        /// </summary>
        [DataMember(Name="listOrder", EmitDefaultValue=false)]
        public int? ListOrder { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CertificationCertificateCertificationCategory {\n");
            sb.Append("  CertificationCategoryId: ").Append(CertificationCategoryId).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  ListOrder: ").Append(ListOrder).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as CertificationCertificateCertificationCategory);
        }

        /// <summary>
        /// Returns true if CertificationCertificateCertificationCategory instances are equal
        /// </summary>
        /// <param name="input">Instance of CertificationCertificateCertificationCategory to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CertificationCertificateCertificationCategory input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.CertificationCategoryId == input.CertificationCategoryId ||
                    (this.CertificationCategoryId != null &&
                    this.CertificationCategoryId.Equals(input.CertificationCategoryId))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.ListOrder == input.ListOrder ||
                    (this.ListOrder != null &&
                    this.ListOrder.Equals(input.ListOrder))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.CertificationCategoryId != null)
                    hashCode = hashCode * 59 + this.CertificationCategoryId.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.ListOrder != null)
                    hashCode = hashCode * 59 + this.ListOrder.GetHashCode();
                return hashCode;
            }
        }
    }

}
