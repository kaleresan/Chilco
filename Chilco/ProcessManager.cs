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
        private bool IsRunning;
        public Stopwatch RunningTime;
        public ProcessGroup ProcessGroup;
        public ProcessManager(ProcessGroup processGroup)
        {
            throw new NotImplementedException();
        }

        private void KillProcesses()
        {
            //For every Process in the Processgroup
            foreach(string s in ProcessGroup.Processes)
            {
                //For every Process currently running that has the name s
                foreach(Process p in Process.GetProcessesByName(s))
                {
                    //Checks if process is actually running 
                    //(sometimes the Process closes itself before being killed and Chilco crashes)
                    if(Process.GetProcessesByName(s).Length > 0)
                    {
                        p.Kill();
                    }
                }
            }
        }

        /// <summary>
        /// Checks if any process in the ProcessGroup is running.
        /// </summary>
        /// <returns>true if one or more processes in the Group are running</returns>
        public bool CheckProcesses()
        {
            throw new NotImplementedException();
        }

        public void UpdateLeftoverTime()
        {
            throw new NotImplementedException();
        }
    }
}
