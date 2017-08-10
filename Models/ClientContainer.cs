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

        //
        // @note Would have been nice if this property could generate itself,
        //       Each time someone asked for it. Maybe that is a job for the repository,
        //       but I think it also can be done by the MySql, though it is a pain to 
        //       program a MySql database. - JSolsvik 10.08.17
        //
        public int? TranslationCount { get; set; }
        
    }
}