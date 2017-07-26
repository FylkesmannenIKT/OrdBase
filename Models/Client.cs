using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

// @doc configure many to many http://www.entityframeworktutorial.net/code-first/configure-many-to-many-relationship-in-code-first.aspx

namespace OrdBaseCore.Models 
{
	public class Client 
	{   
        [Key]
        [StringLength(127)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
		public string Key { get; set; }

        [StringLength(127)]
		public string ApiKey { get; set; }

        [StringLength(255)]
		public string WebpageUrl {get; set; }	

        [StringLength(255)]
		public string ThumbnailUrl { get; set; }

		public DateTime? LastAccess { get; set; }
		public int? RequestCount { get; set; }

        // @brief Setting up a many to many relationship between the clients and 
		//    		the containers + languages.
		public virtual List<ClientContainer>   DefaultContainers { get; set; }
		public virtual List<ClientLanguage>    DefaultLanguages  { get; set;}
	}
}