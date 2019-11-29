using RestSharp;
using System;
using WebSocketSharp;

namespace Chilco
{
    internal static class ConnectionHandler
    {
        private const string DOMAIN = "http://chilco.de";

        public static void Connect()
        {
            throw new NotImplementedException();

            /*
             Order of tasks
                -Websocket connect
                -get register-token
                -Open Website with token in url [chilco.de/register/TOKEN]
                -get auth token from websocket
                -Websocket idles for update messages
                -API GET Request: Receive Settings.json
             */
        }

        internal static void Register(string token)
        {
            System.Diagnostics.Process.Start(DOMAIN + "/register/" + token);
        }

        internal static void Auth(string token)
        {
            throw new NotImplementedException();
            //save token in a file
        }

        private static void ConnectWebsocket()
        {
            using (var ws = new WebSocket(DOMAIN))
            {
                ws.OnMessage +=
                (sender, e) =>
                {
                    string[] data = e.Data.Split(':');
                    string type = data[0];
                    string token = data[1];


                    switch (type) {
                        case "register":    Register(token);  break;
                        case "auth":        Auth(token);      break;
                        default:            UpdateRules();    break;
                    }
                };
                //ws.OnOpen += (sender, e) => UpdateRules();

                ws.Connect();
            }
        }

        private static void UpdateRules()
        {
            throw new NotImplementedException();

            //this is just an example on how it could be with some example data

            var client = new RestClient(DOMAIN);

            var request = new RestRequest("settings/" + username, Method.GET);

            request.AddHeader("x-access-token", token);

            // async with deserialization
            var asyncHandle = client.ExecuteAsync<Settings>(request, response =>
            {
                Settings.Update(response.Data);
            });
        }
    }
}