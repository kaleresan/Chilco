using System;
using System.IO;

namespace Chilco
{
    internal static class FileIO
    {
        private static readonly string path = Path.Combine(Environment.CurrentDirectory, "settings.json");

        public static void Load()
        {
            string json = File.ReadAllText(path);
            //Settings.Update(Newtonsoft.Json.JsonConvert.DeserializeObject<Settings>(json));
        }

        public static void Save()
        {
            File.Create(path).Close();
            string json = Newtonsoft.Json.JsonConvert.SerializeObject(Group.GetGroups);
            File.WriteAllText(path, json);
        }
    }
}