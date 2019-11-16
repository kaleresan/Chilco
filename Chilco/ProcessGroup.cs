using System;
using System.Collections.Generic;

namespace Chilco
{
    class ProcessGroup
    {
        public string Title;
        public List<String> Processes;
        public TimeSpan LeftoverTime;
        public bool DoTimeRollover;
        public DateTime DateLastRun;
        public TimeSpan DailyPlaytime;

        public ProcessGroup(string title, List<String> processes, TimeSpan leftoverTime, bool doTimeRollover, DateTime dateLastRun, TimeSpan dailyPlaytime)
        {
            this.Title = title;
            this.Processes = processes;
            this.LeftoverTime = leftoverTime;
            this.DoTimeRollover = doTimeRollover;
            this.DateLastRun = dateLastRun;
            this.DailyPlaytime = dailyPlaytime;
            Settings.GetInstance().settings.Add(this);
        }
    }
}
