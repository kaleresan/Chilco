## System Setup

```sh
# package manager
## arch
pacman -S yarn

## mac
brew install yarn


# npm
npm i -g lerna ts-node typescript nodemon yarn

# Installation
yarn

# You need to install mongodb
```
## Tools
- You can install [insomnia](https://insomnia.rest/) to test the endpoints 


## Adding new dependencies

To install only for the current service (inaccessible for other services):

```sh
# in service directory
yarn add <pkg-name>
```

To install for all services (discouraged!):

```sh
# in root directory
yarn add <pkg-name>
```

## Services
- api-gateway
- service-authentication
- service-mail

## Development
1. You need to start 'packages/api-gateway'
2. You neet to start your service
3. Add your service to /etc/hosts (unix/mac) or %WinDir%\hosts
 (win) 
4. Use Postman to call the api-gateway ("localhost:5000")
5. To create a account use POST: localhost:5000/auth/register
````sh 
curl --request POST \
  --url http://localhost:5000/auth/register \
  --header 'content-type: application/json' \
  --cookie 'service-salesforce.sid=s%253A6jn6KmcFbBsnZj9-LvwZa5bYo0wZKW8J.CoVgzDE3ir0ql9YtbsUnv%252FqfRjfasgC7xMW%252BkgdoO8E; service-outlook.sid=s%253AVob_cObl1_2Mha3LGiON1ZcWON3hAJyF.1LTM8oZK2p5G697oxeFjzG%252BXWG8TL3QUmJobtKyPURk; service-hubspot.sid=s%253A1-M3kxtbUuQ6kZg0pnEjy3YZXQlJqi5m.G0Ms2vFgvumkVaU33j7lh0csU8SFvGKr7rxbSRAK8rk' \
  --data '{
	"firstname": "Christoph-Thomas",
	"lastname": "Abs",
	"email": "example@example.com",
	"password": "foo",
}'
````
6. To authenticate use POST: localhost:5000/auth/login
````sh 
curl --request POST \
  --url http://localhost:5000/auth/login \
  --header 'content-type: application/json' \
  --data '{
	"email": "example@example.com",
	"password": "foo"
}'
````
7. To work with secure routes (services) you need to add the authentication-token from the authentication progress to the header with the key x-access-token

## Services
- api-gateway
- service-users
- service-account
- service-desktop-sync
- service-user-settings
- service-authentication
- service-dashboard-sync

