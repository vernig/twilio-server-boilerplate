# Boilerplate for a minimal web server based on Express

## Quick start
* Install dependencies
```shell
npm install 
```
* Create `.env` file based on `.env.template` and add Twilio credentials
* Run server
```shell
npm start
```
* Or run the server in development mode (i.e. with auto-reload on changes)
```shell
npm run start-dev
```
## Features
This boilerplate includes:
* Twilio client. Specify `TWILIO_ACCOUNT_SID` and `TWILIO_ACCOUNT_SECRET` in `.env` file
* Sample route (`/token`) to generate Twilio Token. You need to fill in `TWILIO_TOKEN_API_KEY` and `TWILIO_TOKEN_API_SECRET` in .env with an API key
* `ngrok` to publish your server. Specify you subdomain using the `NGROK_SUBDOMAIN` in `.env` file
* `dotenv` to import variable from `.env` file
* `cors` to allow CORS on your server (so you can serve APIs usable by browsers)
* `nodemon` to relad express everytime you change a file. This is a developer dependency and is used only with `npm run start-dev`