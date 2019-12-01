using System;
using System.Diagnostics;

namespace Chilco
{
    internal class Tracker
    {
        private Stopwatch RunningTime;
        public Group group;

        public Tracker(Group group)
        {
            this.group = group;
            RunningTime = new Stopwatch();
        }

        /// <summary>
        /// Checks if any process in the GetGroup is running.
        /// </summary>
        /// <returns>true if one or more processes in the Group are running</returns>
        private bool IsRunning()
        {
            bool running = false;
            foreach (string s in group.ruleset.Processes)
            {
                if (Process.GetProcessesByName(s).Length > 0)
                {
                    running = true;
                    break;
                }
            }
            return running;
        }

        public void CheckProcesses()
        {
            UpdateLeftoverTime();
            if (group.LeftoverTime.Ticks < 1)
            {
                Butcher.KillProcesses(group);
            }
        }

        private void UpdateLeftoverTime()
        {
            if (RunningTime.IsRunning)
            {
                if (group.LeftoverTime > RunningTime.Elapsed)
                    group.LeftoverTime -= RunningTime.Elapsed;
                else group.LeftoverTime = new TimeSpan(0);

                RunningTime.Reset();
            }

            if (IsRunning() && group.LeftoverTime.Ticks > 0)
            {
                RunningTime.Start();
                group.DateLastRun = DateTime.Now;
            }
        }
    }
}