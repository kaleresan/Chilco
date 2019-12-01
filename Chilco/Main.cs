using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;

namespace Chilco
{
    public static class Main
    {
        private static List<Tracker> Trackers;
        private static bool isRunning = false;

        //Update
        internal static void Update(List<Group.Ruleset> rulesets)
        {
            Group[] oldGroups = FileIO.LoadGroups();
            List<Tracker> newTrackers = new List<Tracker>();
            foreach (Group.Ruleset ruleset in rulesets)
            {
                Group group;
                if (oldGroups.Where(g => g.ruleset.Key == ruleset.Key).Count() == 1)
                {
                    group = oldGroups.Where(g => g.ruleset.Key == ruleset.Key).First();
                    group.ruleset = ruleset;
                }
                else
                {
                    group = new Group(ruleset.DailyPlaytime, DateTime.Now, ruleset);
                }
                newTrackers.Add(new Tracker(group));
            }
            Trackers = newTrackers;

            if(isRunning == false)
            {
                isRunning = true;
                Thread Loop = new Thread(new ThreadStart(MainLoop));
                Loop.Start();
            }
        }

        private static void MainLoop()
        {
            while (isRunning)
            {
                Thread.Sleep(1000);
            }
        }

        //Delete
    }
}