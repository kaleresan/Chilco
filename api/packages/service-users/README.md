# `@chilco/service-authentication`
The authentication service handels the account and device authentication.
You can register a new Device or Account,
authenticate a new account or device and
you can send a password reset mail.

## Usage
```
import authentication from '@chilco/service-authentication';
```

## Info 
| Service | |
|---|---|
| Name | service-authentication |
| Default Port | 8080 |
| API-Gateway Route | /auth |
| isSecure | false |
| Service Bridge | false |
| Blacklisted Routes | true |
| Whitelisted Routes | false |

## Routes 
| /register | |
|---|---|
| Method | POST |
| Params | - |
| Body | ```{ email: "example@example.com", password: "example", firstname: "Example", "lastname": "Example" }``` |
| isSecure | false |
| Bridget Route | false |
| Blacklisted Route | false |
| Whitelisted Routes | false |

| /register | |
|---|---|
| Method | POST |
| Params | - |
| Body | ```{ email: "example@example.com", password: "example", firstname: "Example", "lastname": "Example" }``` |
| isSecure | false |
| Bridget Route | false |
| Blacklisted Route | false |
| Whitelisted Routes | false |

| /login | |
|---|---|
| Method | POST |
| Params | - |
| Body | ```{ email: "example@example.com", password: "example"``` |
| isSecure | false |
| Bridget Route | false |
| Blacklisted Route | false |
| Whitelisted Routes | false |

| / | |
|---|---|
| Method | POST |
| Params | - |
| Body | ``` { "token": "token" } ``` |
| isSecure | false |
| Bridget Route | false |
| Blacklisted Route | true |
| Whitelisted Routes | false |

| /:accountId/authToken | |
|---|---|
| Method | POST |
| Body | `````` |
| Params |  - /:id -> AccountId  |
| isSecure | false |
| Bridget Route | false |
| Blacklisted Route | true |
| Whitelisted Routes | false |
