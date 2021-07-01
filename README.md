# node-blackeye
There was originally a phishing tool called `blackeye` that generated fake login pages so that victims of the attack would get their login details stolen. I rewrote it in NodeJS instead of PHP!

## Before we get started: Legal Disclaimer

Usage of this tool for attacking targets without prior mutual consent is illegal. It's the end user's responsibility to obey all applicable local, state and federal laws. Developers assume no liability and are not responsible for any misuse or damage caused by this program. Only use is for educational purposes.


## Running the server
Run `npm install` to install all the packages necessary. Then run `npm start [SITE_NAME]` where `[SITE_NAME]` is the site you want to server. For example, a Google login page would be called `google` so you would do `npm start google`. Your NodeJS + Express server will be running at this point. 

Optional (Ngrok): If you want to use `ngrok`, go through the `ngrok` account creation and run the command `./ngrok http [PORT]` in the root of the project, where `[PORT]` is the port number your NodeJS server is running (by default this is port 5000). If you want to tweak the port, either edit the source code or set and environment variable called `PORT` to the port number that you wish and restart the server.

## Todo

- [ ] Create a bash script to automate the starting of the server and loading the pages
- [ ] Phishing pages
