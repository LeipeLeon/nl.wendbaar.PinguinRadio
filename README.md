# Pinguin Radio

An Unofficial Apple TV app for http://pinguinradio.com

It's not in the App store yet because it's pending approval from PinguinRadio them self.

## Development

## Native

Just press play from Xcode. The streams are defined in `StationsCollectionViewController.swift`

![Home](https://pinguin-radio.s3.amazonaws.com/screenshots/screen_native0.png)

![App1](https://pinguin-radio.s3.amazonaws.com/screenshots/screen_native1.png)

![App2](https://pinguin-radio.s3.amazonaws.com/screenshots/screen_native2.png)

## TVML

This is where I started as first but ran into some problems w/ the player. For example live update of the artwork and artist/title were flaky or not possible.

But to start this up do the following:

Uncomment the code below MARK TVML in `AppDelegate.swift`

The `client/` directory contains the javascipt application files and TVML templates to render the application. By default, the app uses [a hosted version](https://pinguin-radio.s3.amazonaws.com/) of the client to make it easy to install the app on your device. For development, you'll have to run the server locally.

    $ cd client/
    $ python -m SimpleHTTPServer 9001
    Serving HTTP on 0.0.0.0 port 9001 ...
    
When you want to run it on a device update `TVBaseURL` in `PinguinRadio/AppDelegate.swift` to use your local server instead of the hosted one:

    static let TVBaseURL = "http://<your.ip.address>:9001/"

![Home](https://pinguin-radio.s3.amazonaws.com/screenshots/screen1.png)
![App](https://pinguin-radio.s3.amazonaws.com/screenshots/screen2.png)

## Contributing

Please [create an issue](https://github.com/LeipeLeon/nl.wendbaar.PinguinRadio/issues) if you run into any problems, or create a pull request.
