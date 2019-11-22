using System;
using System.Collections.Generic;

namespace Chilco
{
    internal class Group
    {
        public TimeSpan LeftoverTime;
        public DateTime DateLastRun;
        public Ruleset ruleset;
        public static List<Group> GetGroups { get; private set; } = new List<Group>();

        public Group(string title, List<String> processes, TimeSpan leftoverTime, bool doTimeRollover, DateTime dateLastRun, TimeSpan dailyPlaytime)
        {
            this.LeftoverTime = leftoverTime;
            this.DateLastRun = dateLastRun;
            this.ruleset = new Ruleset(title, processes, doTimeRollover, dailyPlaytime);
        }

        public struct Ruleset {

            public string Title;
            public List<string> Processes;
            public bool DoTimeRollover;
            public TimeSpan DailyPlaytime;

            public Ruleset(string Title, List<string> Processes, bool DoTimeRollover, TimeSpan DailyPlaytime)
            {
                this.Title = Title;
                this.Processes = Processes;
                this.DoTimeRollover = DoTimeRollover;
                this.DailyPlaytime = DailyPlaytime;
            }
        }

    }
}