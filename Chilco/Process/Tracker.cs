using System;
using System.Diagnostics;

namespace Chilco
{
    internal class Tracker
    {
        private readonly Linker Linker;
        private Stopwatch RunningTime;
        private Group GetGroup => Linker.Group;

        public Tracker(Linker linker)
        {
            this.Linker = linker;
            RunningTime = new Stopwatch();
        }

        /// <summary>
        /// Checks if any process in the GetGroup is running.
        /// </summary>
        /// <returns>true if one or more processes in the Group are running</returns>
        public bool IsRunning()
        {
            bool running = false;
            foreach (string s in this.Linker.GetRuleset().Processes)
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
            if (Linker.Group.LeftoverTime.Ticks == 0)
            {
                Butcher.KillProcesses(GetGroup);
            }
        }

        public void UpdateLeftoverTime()
        {
            if (RunningTime.IsRunning)
            {
                if (GetGroup.LeftoverTime > RunningTime.Elapsed)
                    GetGroup.LeftoverTime -= RunningTime.Elapsed;
                else GetGroup.LeftoverTime = new TimeSpan(0);

                RunningTime.Reset();
            }

            if (IsRunning() && GetGroup.LeftoverTime.Ticks > 0)
            {
                RunningTime.Start();
                GetGroup.DateLastRun = DateTime.Now;
            }
        }
    }
}