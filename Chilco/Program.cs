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
            ConnectionHandler.Connect();
        }
    }
}