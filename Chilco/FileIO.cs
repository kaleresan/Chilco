using System;
using System.IO;

namespace Chilco
{
    internal static class FileIO
    {
        private static readonly string groupPath = Path.Combine(Environment.CurrentDirectory, "settings.json");
        private static readonly string authTokenPath = Path.Combine(Environment.CurrentDirectory, "token.txt");

        public static Group[] LoadGroups()
        {
            if (File.Exists(groupPath))
            {
                string json = File.ReadAllText(groupPath);
                return Newtonsoft.Json.JsonConvert.DeserializeObject<Group[]>(json);
            }

            return new Group[0];
        }

        public static void SaveGroups(Group[] groups)
        {
            File.Create(groupPath).Close();
            string json = Newtonsoft.Json.JsonConvert.SerializeObject(groups);
            File.WriteAllText(groupPath, json);
        }

        public static string LoadAuthToken() 
        {
            Console.WriteLine("Loading auth token");
            if (File.Exists(authTokenPath))
                return File.ReadAllText(authTokenPath);
            else
                return "";
        }

        public static void SaveAuthToken(string authToken)
        {
            File.Create(authTokenPath).Close();
            File.WriteAllText(authTokenPath, authToken);
        }
    }
}