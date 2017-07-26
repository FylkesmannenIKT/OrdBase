using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrdBaseCore.Models 
{
    public class ClientContainer
    {
        public string ClientKey { get; set; }
        public virtual Client Client { get; set; }

        public string ContainerKey { get; set; }
        public virtual Container Container { get; set; }
    }
}