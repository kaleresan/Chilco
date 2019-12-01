using IWshRuntimeLibrary;
using System;
using System.IO;

namespace Chilco
{
    internal static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        private static void Main()
        {
            Console.WriteLine("Chilco is starting...");
            ImplementAutostart();
            
            ConnectionHandler.Connect();
        }

        public static void ImplementAutostart()
        {
            Console.WriteLine("Implementing Autostart");
            string startup = Environment.GetFolderPath(Environment.SpecialFolder.CommonStartup);
            string application = System.Reflection.Assembly.GetEntryAssembly().Location;

            string applicationName = Path.GetFileNameWithoutExtension(application);
            string shortcut_path = Path.Combine(startup, applicationName + ".lnk");

            var wsh = new IWshShell_Class();
            IWshShortcut shortcut = wsh.CreateShortcut(shortcut_path) as IWshShortcut;
            shortcut.TargetPath = application;
            shortcut.Save();
        }
    }
}