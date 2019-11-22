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
        }

        public static void ImplementAutostart()
        {
            string startup = Environment.GetFolderPath(Environment.SpecialFolder.CommonStartup);
            string application = System.Reflection.Assembly.GetEntryAssembly().Location;
            string applicationName = Path.GetFileName(application);

            string startup_applicationName = Path.Combine(startup, applicationName);

            try
            {
                File.Move(application, startup_applicationName);
            }
            catch (IOException e)
            {
                Console.WriteLine(e.StackTrace);
            }
        }
    }
}