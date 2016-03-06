Maelström - Users
=================
_by @demiurgosoft_   
[![Build Status](https://travis-ci.org/demiurgosoft/maelstrom-users.svg?branch=master)](https://travis-ci.org/demiurgosoft/maelstrom-users)
[![Coverage Status](https://coveralls.io/repos/github/demiurgosoft/maelstrom-users/badge.svg?branch=master)](https://coveralls.io/github/demiurgosoft/maelstrom-users?branch=master)
[![Dependency Status](https://gemnasium.com/demiurgosoft/maelstrom-users.svg)](https://gemnasium.com/demiurgosoft/maelstrom-users)
[![Code Climate](https://codeclimate.com/github/demiurgosoft/maelstrom-users/badges/gpa.svg)](https://codeclimate.com/github/demiurgosoft/maelstrom-users)

![Maelström Logo](https://raw.githubusercontent.com/demiurgosoft/maelstrom/master/logo/trans_logo.png)

Users micro-service for [Mäelstrom project](https://github.com/demiurgosoft/maelstrom-users), login and authentication with mongodb and JWT

## Geting Started
1. To install the service and necessary dependencies: `npm install --production`
	1. If you want also the dev-dependencies (for testing and development of Mäelstrom-users): `npm install`
	2. To test the service using mocha: `npm test`
2. To start the service: `npm start`

To test the system, it will provide a simple login and signup clients (`/login` and `/signup`)

## API REST
Users microservice is a RESTful API with http request and json responses:

|Method|URL         |Usage   |Response|
|:----:|:----------:|:-------|:-------|
|POST|`/login`    |Logs user with given data `{"username","password"}` in the system|Returns the token `{"token"}` and code 201 or an error|
|POST|`/signup`   |Creates a new user with given data `{"username","password","email"}`if it doesn't exist|Returns the login token or an error|
|PUT |`/restricted/update`|Updates user data with given data `{"username","password"}`|Returns status 204 if everything is ok|
|DELETE|`/restricted/remove`|Removes user, returns 204 if everything is ok|


>All urls under `restricted/*` requires a valid token, auth header must be `Bearer [token]` to get access.


## Response status

|Code|Meaning                        |
|:--:|:------------------------------|
|201 |OK in POST operations          |
|204 |OK in PUT and DELETE operations|
|400 |Bad request (not valid body)   |
|401 |Invalid token (not authorized  |
|403 |Incorrect password             |
|404 |Data not found                 |
|500 |Internal server error          |

## JWT
The tokens used are [Json Web Tokens](http://jwt.io/) with the following payload structure:
```JSON
{
"id": "56d96ce3a5e8cf4c28e1a4a4",
"username": "my user",
...
}
```
Each user has an unique _id_ used across all the maelström servers (mongodb id), also the username is stored. All the tokens are signed with a private key in the server (for testing is `donpanic42`)

> Licensed under GNU AFFERO GENERAL PUBLIC LICENSE Version 3
> Maelström logo by @iblancasa under CC0
