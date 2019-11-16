using System.Collections.Generic;

namespace Chilco
{
    internal class Settings
    {
        public List<string> users = new List<string>();
        public int accountID;
        public List<ProcessGroup> settings = new List<ProcessGroup>();

        private static Settings single_instance = null;

        public static Settings GetInstance()
        {
            if (single_instance == null)
                single_instance = new Settings();

            return single_instance;
        }

        public static void Update(Settings new_settings) {
            single_instance.settings.Clear();
            single_instance.users.Clear();
            single_instance = new_settings;
        }
    }
}