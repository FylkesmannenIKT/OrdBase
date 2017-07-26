using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrdBaseCore.Models {

    public class Container {

        [Key]
        [StringLength(64)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string Key { get; set; } 

        // @brief Setting up many to many navigation property
        public virtual List<ClientContainer> Clients { get; set; } 

    }  
}