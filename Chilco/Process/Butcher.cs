using System.Diagnostics;
using System.Linq;

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
            System.Console.WriteLine("Trying to kill process: "+ processName);
            //For every Process currently running that has the name s
            foreach (Process p in Process.GetProcesses().Where(p => p.ProcessName == processName || p.MainWindowTitle == processName))
            {
                //Checks if process is actually running
                //(sometimes the Process closes itself before being killed and Chilco crashes)
                if (Process.GetProcesses().Where(p => p.ProcessName == processName || p.MainWindowTitle == processName).Count() > 0)
                {
                    System.Console.WriteLine("Killing process: " + processName);
                    p.Kill();
                }
            }
        }
    }
}