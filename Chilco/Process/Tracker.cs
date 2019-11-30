using System;
using System.Diagnostics;

namespace Chilco
{
    internal class Tracker
    {
        private Stopwatch RunningTime;
        private Group group;

        public Tracker()
        {
            RunningTime = new Stopwatch();
        }

        /// <summary>
        /// Checks if any process in the GetGroup is running.
        /// </summary>
        /// <returns>true if one or more processes in the Group are running</returns>
        public bool IsRunning()
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
            if (group.LeftoverTime.Ticks == 0)
            {
                Butcher.KillProcesses(group);
            }
        }

        public void UpdateLeftoverTime()
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