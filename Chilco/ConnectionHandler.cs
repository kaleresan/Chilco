using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
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
            Console.WriteLine("Booting up connection");
            authToken = FileIO.LoadAuthToken();
            if (authToken.IsNullOrEmpty())
            {
                Console.WriteLine("No valid token");
                RegisterHandshake();
            }

            UpdateRuleset();
            //ConnectWebsocket();
        }

        private static void RegisterHandshake()
        {
            Console.WriteLine("Beginning register handshake");
            using (var ws = new WebSocket("ws://chilco.de/api/desktop-sync/socket.io/?EIO=2&transport=websocket&x-access-token="))
            {
                ws.OnOpen += (sender, e) =>
                {
                    Console.WriteLine("Sending register token request");
                    ws.Send("42[\"GET_REGISTER_TOKEN\",{}]");
                };

                ws.OnMessage +=
                (sender, e) =>
                {
                    Console.WriteLine("received message: " + e.Data);

                    string register_token = "";
                    if (e.Data.Length > "SET_REGISTER_TOKEN".Length || e.Data.Contains("SET_REGISTER_TOKEN"))
                    {
                        register_token = extractToken(e.Data);
                    }

                    if (register_token.IsNullOrEmpty() == false)
                    {
                        Console.WriteLine("Extracted Token is = " + register_token);
                        OpenWebsite(register_token);
                    }

                    if (e.Data.Contains("VALIDATE_TOKEN"))
                    {
                        authToken = extractToken(e.Data);
                        FileIO.SaveAuthToken(authToken);
                    }
                };
                Console.WriteLine("Trying to connect");

                ws.OnError += (sender, e) =>
                {
                    Console.WriteLine(e.Message);
                };
                ws.Connect();
                Console.WriteLine("Socket is alive: " + ws.IsAlive); // Do not delete this line
                while (authToken.IsNullOrEmpty()) ;
            }
        }
                

        private static string extractToken(string raw_message)
        {
            string json = raw_message.Remove(0, raw_message.IndexOf('['));
            var data = JsonConvert.DeserializeObject<JArray>(json);
            var payload = data[1].Value<JObject>();
            return payload["token"].Value<string>();
        }

        private static Ruleset[] extractRulesets(string raw_json) {

            var jObject = JsonConvert.DeserializeObject<JObject>(raw_json);
            var data = (JObject)jObject["data"];
            var setting = data["setting"];
            var rulesets_as_json = setting.ToString();
            return JsonConvert.DeserializeObject<Ruleset[]>(rulesets_as_json);
        }

        internal static void OpenWebsite(string token)
        {
            System.Diagnostics.Process.Start(DOMAIN + "/approve/device/" + token);
        }

        private static void ConnectWebsocket()
        {
            using (var ws = new WebSocket("ws://chilco.de/api/desktop-sync/socket.io/?EIO=2&transport=websocket&x-access-token=" + authToken))
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
            var client = new RestClient(DOMAIN + "/api/");

            string username = "";

            var request = new RestRequest("settings/" + username, Method.GET);

            request.AddHeader("x-access-token", authToken);

            // API GET request
            IRestResponse response = client.Execute(request);

            List<Ruleset> RulesetList = new List<Ruleset>();

            if (response.IsSuccessful)
            {
                string rulesets_as_json = response.Content;
                Console.WriteLine("Rulesets as json:"+rulesets_as_json);

                RulesetList.AddRange(extractRulesets(rulesets_as_json));
            }
            else
            {
                Group[] groups = FileIO.LoadGroups();
                if (groups == null || groups.Length == 0)
                {
                    Console.WriteLine("no Groups saved, getting default rulesets");
                    RulesetList.AddRange(GetDefaultRulesets());
                }
                else
                {
                    Console.WriteLine("Reading saved rulesets");
                    RulesetList.AddRange(groups.Select(group => group.ruleset).ToList());
                }
            }

            Main.Update(RulesetList);
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