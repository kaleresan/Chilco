using RestSharp;
using System;
using System.Collections.Generic;
using WebSocketSharp;

namespace Chilco
{
    internal static class ConnectionHandler
    {
        private const string DOMAIN = "http://chilco.de";
        private static string authToken;

        public static void Connect()
        {
            authToken = FileIO.LoadAuthToken();
            if (authToken.IsNullOrEmpty())
            {
                RegisterHandshake();
            }

            UpdateRules();
            ConnectWebsocket();
        }

        private static void RegisterHandshake()
        {
            using (var ws = new WebSocket(DOMAIN))
            {
                ws.OnMessage +=
                (sender, e) =>
                {
                    //TODO Implement Register Handshake
                    //save auth token with FileIO
                };

                ws.Connect();
            }
        }

        internal static void OpenWebsite(string token)
        {
            System.Diagnostics.Process.Start(DOMAIN + "/register/" + token);
        }

        private static void ConnectWebsocket()
        {
            using (var ws = new WebSocket(DOMAIN))
            {
                ws.OnMessage +=
                (sender, e) =>
                {
                    UpdateRules();
                };

                ws.Connect();
            }
        }

        private static void UpdateRules()
        {
            //TODO Implement API GET request
            //throw new NotImplementedException();

            //this is just an example on how it could be with some example data

            var client = new RestClient(DOMAIN);

            string username = "";

            var request = new RestRequest("settings/" + username, Method.GET);

            request.AddHeader("x-access-token", authToken);

            // async with deserialization
            var asyncHandle = client.ExecuteAsync<Group.Ruleset>(request, response =>
            {
                Group.Ruleset ruleset = default;

                if (response.IsSuccessful)
                {
                    ruleset = response.Data;
                }
                else
                {
                    Group[] groups = FileIO.LoadGroups();
                    if (groups == null || groups.Length == 0)
                    {
                        ruleset = GetDefaultRuleset();
                    }
                    else
                    {
                        //extract ruleset from the specified group
                    }
                }
                Main.Update(ruleset);
            });
        }

        private static Group.Ruleset GetDefaultRuleset()
        {
            string key = "";
            List<string> processes = new List<string>();
            processes.Add("Firefox");
            processes.Add("Chrome");

            DateTime date3 = new DateTime();
            DateTime date4 = date3.AddMinutes(30);
            TimeSpan dailyPlaytime = date4 - date3;

            return new Group.Ruleset(key, "Browser", processes, true, dailyPlaytime);
        }
    }
}