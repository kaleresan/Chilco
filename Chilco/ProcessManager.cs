using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chilco
{
    class ProcessManager
    {
        private Stopwatch RunningTime;
        public ProcessGroup ProcessGroup;
        public ProcessManager(ProcessGroup processGroup)
        {
            this.ProcessGroup = processGroup;
            RunningTime = new Stopwatch();
            throw new NotImplementedException();
        }

        private void KillProcesses()
        {
            //For every Process in the Processgroup
            foreach(string s in ProcessGroup.Processes)
            {
                KillProcess(s);
            }
        }

        private void KillProcess(string processName)
        {
            //For every Process currently running that has the name s
            foreach (Process p in Process.GetProcessesByName(processName))
            {
                //Checks if process is actually running 
                //(sometimes the Process closes itself before being killed and Chilco crashes)
                if (Process.GetProcessesByName(processName).Length > 0)
                {
                    p.Kill();
                }
            }
        }

        public bool IsRunning()
        {
            bool running = false;
            foreach (string s in ProcessGroup.Processes)
            {
                if (Process.GetProcessesByName(s).Length > 0)
                {
                    running = true;
                    break;
                }
            }
            return running;
        }

        /// <summary>
        /// Checks if any process in the ProcessGroup is running.
        /// </summary>
        /// <returns>true if one or more processes in the Group are running</returns>
        public void CheckProcesses()
        {
            UpdateLeftoverTime();
            if(ProcessGroup.LeftoverTime.Ticks == 0)
            {
                KillProcesses();
            }
        }

        public void UpdateLeftoverTime()
        {
            if (RunningTime.IsRunning)
            {
                if (ProcessGroup.LeftoverTime > RunningTime.Elapsed)
                    ProcessGroup.LeftoverTime -= RunningTime.Elapsed;
                else ProcessGroup.LeftoverTime = new TimeSpan(0);

                RunningTime.Reset();
            }

            if (IsRunning() && ProcessGroup.LeftoverTime.Ticks > 0)
            {
                RunningTime.Start();
                ProcessGroup.DateLastRun = DateTime.Now;
            }
        }
