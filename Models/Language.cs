using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrdBaseCore.Models
{
	public class Language 
	{
        [Key]
        [StringLength(8)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string Key { get; set; } 

        [Required]
        [StringLength(64)]
        public string Name { get; set; }

        // @note Many to many navigational property
        public virtual List<ClientLanguage> Clients { get; set; }
	}
}