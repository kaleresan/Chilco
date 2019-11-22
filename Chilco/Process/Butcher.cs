using System;
using System.Diagnostics;

namespace Chilco
{
    internal static class Butcher
    {
        public static void KillProcesses(Group group)
        {
            //For every Process in the Processgroup
            foreach (string s in group.ruleset.Processes)
            {
                KillProcess(s);
            }
        }

        private static void KillProcess(string processName)
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

        
    }
}