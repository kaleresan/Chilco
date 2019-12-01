using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using WebSocketSharp;
using static Chilco.Group;

namespace Chilco
{
    internal static class ConnectionHandler
    {
        private const string DOMAIN = "http://chilco.de";
        private static string authToken;

        public static void Connect()
        {
            Console.WriteLine("Booting connection");
            authToken = FileIO.LoadAuthToken();
            if (authToken.IsNullOrEmpty())
            {

                RegisterHandshake();
            }

            UpdateRuleset();
            ConnectWebsocket();
        }

        private static void RegisterHandshake()
        {
            Console.WriteLine("Register Handshake");
            using (var ws = new WebSocket("ws://chilco.de/desktop-sync/socket.io/?EIO=2&transport=websocket&x-access-token="))
            {
                ws.OnOpen += (sender, e) =>
                {
                    Console.WriteLine("Sending socket: GET_REGISTER_TOKEN");
                    ws.Send("GET_REGISTER_TOKEN");
                };

                ws.OnMessage +=
                (sender, e) =>
                {
                    Console.WriteLine("Socket message: "+e.Data);
                    //TODO save auth token with FileIO
                };
                Console.WriteLine("Trying to connect");
               
                ws.OnError += (sender, e) =>
                {
                    Console.WriteLine(e.Message);
                };
                ws.Connect();
                

                Console.WriteLine("Socket is alive: "+ws.IsAlive);
            }
        }

        internal static void OpenWebsite(string token)
        {
            System.Diagnostics.Process.Start(DOMAIN + "/register/" + token);
        }

        private static void ConnectWebsocket()
        {
            using (var ws = new WebSocket("ws://chilco.de/desktop-sync/socket.io/?EIO=2&transport=websocket&x-access-token="+authToken))
            {
                ws.OnMessage +=
                (sender, e) =>
                {
                    UpdateRuleset();
                };

                ws.Connect();
            }
        }

        private static void UpdateRuleset()
        {
            //var client = new RestClient(DOMAIN);

            //string username = "";

            //var request = new RestRequest("settings/" + username, Method.GET);

            //request.AddHeader("x-access-token", authToken);


            //// API GET request
            //IRestResponse response = client.Execute(request);

            //List<Ruleset> RulesetList = new List<Ruleset>();

            //if (response.IsSuccessful)
            //{
            //    string rulesets_as_json = response.Content;

            //    Ruleset[] rulesets = Newtonsoft.Json.JsonConvert.DeserializeObject<Ruleset[]>(rulesets_as_json);
            //    RulesetList.AddRange(rulesets);
            //}
            //else
            //{
            //    Group[] groups = FileIO.LoadGroups();
            //    if (groups == null || groups.Length == 0)
            //    {
            //        RulesetList.AddRange(GetDefaultRulesets());
            //    }
            //    else
            //    {
            //        RulesetList.AddRange(groups.Select(group => group.ruleset).ToList());
            //    }
            //}

            //Main.Update(RulesetList);

            //Testing
            Main.Update(GetDefaultRulesets());
        }

        private static List<Ruleset> GetDefaultRulesets()
        {
            List<Ruleset> RulesetList = new List<Ruleset>() {
                    new Ruleset() {
                        Key = "Default1",
                        Title = "Browser",
                        Processes = new List<string>()
                                    {
                                        "Firefox",
                                        "Chrome"
                                    },
                        DoTimeRollover = true,
                        DailyPlaytime = new TimeSpan(0, 0, 30, 0, 0)
                    } ,

                    new Ruleset() {
                        Key = "Default2",
                        Title = "Games",
                        Processes = new List<string>()
                                    {
                                        "Nidhogg",
                                        "Stardew Valley",
                                        "Unturned",
                                        "Ace of Spades",
                                        "Counterstrike Global Offensive"
                                    },
                        DoTimeRollover = true,
                        DailyPlaytime = new TimeSpan(0, 2, 0, 0, 0)
                    } ,

                    new Ruleset() {
                        Key = "Default3",
                        Title = "Malicious Utilities",
                        Processes = new List<string>()
                                    {
                                        "cmd",
                                        "PowerShell"
                                    },
                        DoTimeRollover = true,
                        DailyPlaytime = new TimeSpan(0, 0, 0, 0, 0)
                    } ,

                    new Ruleset() {
                        Key = "Default4",
                        Title = "",
                        Processes = new List<string>()
                                    {
                                        "",
                                        ""
                                    },
                        DoTimeRollover = true,
                        DailyPlaytime = new TimeSpan(0, 0, 0, 0, 0)
                    } ,
                };

            return RulesetList;
        }
    }
}