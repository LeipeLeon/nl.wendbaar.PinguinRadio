# Pinguin Radio

An Unofficial Apple TV app for http://pinguinradio.com

## Development

The `client/` directory contains the javascipt application files and TVML templates to render the application. By default, the app uses [a hosted version](https://pinguin-radio.s3.amazonaws.com/) of the client to make it easy to install the app on your device. For development, you'll have to run the server locally.

    $ cd client/
    $ python -m SimpleHTTPServer 9001
    Serving HTTP on 0.0.0.0 port 9001 ...
    
Update `PinguinRadio/AppDelegate.swift` to use your local server instead of the hosted one:

    static let TVBaseURL = "http://<your.ip.address>:9001/"
    
Please [create an issue](https://github.com/LeipeLeon/nl.wendbaar.PinguinRadio/issues) if you run into any problems.
