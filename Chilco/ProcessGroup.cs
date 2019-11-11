using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chilco
{
    class ProcessGroup
    {
        public List<String> Processes;
        public TimeSpan LeftoverTime;
        public bool DoTimeRollover;

        public ProcessGroup(List<String> Processes, TimeSpan LeftoverTime, bool DoTimeRollover)
        {
            this.Processes = Processes;
            this.LeftoverTime = LeftoverTime;
            this.DoTimeRollover = DoTimeRollover;
        }
    }
}
