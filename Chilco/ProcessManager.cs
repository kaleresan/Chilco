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
        public ProcessGroup Processes;
        public ProcessManager(ProcessGroup processGroup)
        {
            throw new NotImplementedException();
        }

        private void KillProcesses()
        {
            throw new NotImplementedException();
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
