using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrdBaseCore.Models
{
	public class Language 
	{
                //
                // @example: en, no, no-nn, ger
                // @doc HTML lan codes: https://www.w3schools.com/tags/ref_language_codes.asp
                //
                [Key]
                [StringLength(32)]
                [DatabaseGenerated(DatabaseGeneratedOption.None)]
                public string Key { get; set; } 

                [Required]
                [StringLength(127)]
                public string Name { get; set; }
	}
}