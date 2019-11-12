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
        public DateTime DateLastRun;
        public TimeSpan DailyPlaytime;

        public ProcessGroup(List<String> processes, TimeSpan leftoverTime, bool doTimeRollover, DateTime dateLastRun, TimeSpan dailyPlaytime)
        {
            this.Processes = processes;
            this.LeftoverTime = leftoverTime;
            this.DoTimeRollover = doTimeRollover;
            this.DateLastRun = dateLastRun;
            this.DailyPlaytime = dailyPlaytime;
        }
    }
}
