using System;
using System.Collections.Generic;
using System.Linq;
using System.Management.Automation;
using System.Threading.Tasks;

namespace module.Commands
{
    [Cmdlet(VerbsCommon.Open, nameof(TypingsDB))]
    [OutputType(typeof(TypingsDB))]
    public class Open_TypingsDb : Cmdlet
    {
        protected override void ProcessRecord()
        {
        }
    }
}