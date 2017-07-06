using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrdBaseCore.Models
{
	public class Language 
	{
        [Key]
        [StringLength(32)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string Key { get; set; } 

        [Required]
        [StringLength(127)]
        public string Name { get; set; }
	}
}