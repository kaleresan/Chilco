using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chilco
{
    class ClientData
    {
        public List<ProcessGroup> ProcessGroups;
        public ClientData(List<ProcessGroup> ProcessGroups)
        {
            this.ProcessGroups = ProcessGroups;
        }
    }
}
