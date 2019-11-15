using System;
using System.IO;
using System.Security.Permissions;

namespace Chilco
{
    class FileIO
    {
        private static readonly string path = Path.Combine(Environment.CurrentDirectory, "settings.json");

        public static void Load()
        {
            string json = File.ReadAllText(path);
            Settings settings = Settings.GetInstance();
            settings.settings.Clear();
            settings.users.Clear();
            settings = Newtonsoft.Json.JsonConvert.DeserializeObject<Settings>(json);
        }

        public static void Save()
        {
            var myFile = File.Create(path);
            myFile.Close();
            string json = Newtonsoft.Json.JsonConvert.SerializeObject(Settings.GetInstance());
            File.WriteAllText(path, json);
        }
    }
}
