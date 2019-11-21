using System;
using System.Collections.Generic;

namespace Chilco
{
    internal class ProcessGroup
    {
        public TimeSpan LeftoverTime;
        public DateTime DateLastRun;
        public Rules rules;

        public ProcessGroup(string title, List<String> processes, TimeSpan leftoverTime, bool doTimeRollover, DateTime dateLastRun, TimeSpan dailyPlaytime)
        {
            this.LeftoverTime = leftoverTime;
            this.DateLastRun = dateLastRun;
            this.rules = new Rules(title, processes, doTimeRollover, dailyPlaytime);
            Settings.GetInstance().settings.Add(this);
        }


        public struct Rules {
            public string Title;
            public List<string> Processes;
            public bool DoTimeRollover;
            public TimeSpan DailyPlaytime;
            public Rules(string Title, List<string> Processes, bool DoTimeRollover, TimeSpan DailyPlaytime)
            {
                this.Title = Title;
                this.Processes = Processes;
                this.DoTimeRollover = DoTimeRollover;
                this.DailyPlaytime = DailyPlaytime;
            }
        }

    }
}