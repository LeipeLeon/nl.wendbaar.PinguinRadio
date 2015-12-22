//
//  PlayerViewController.swift
//  PinguinRadio
//
//  Created by Leon Berenschot on 22/12/15.
//  Copyright © 2015 wendbaar.nl. All rights reserved.
//

import UIKit
import AVKit

class PlayerViewController: AVPlayerViewController {

    var station: Station!
    var textView: UITextView!
    var nowPlayingUrl: String!
    var nowPlayingTimer: NSTimer!

    override func viewDidLoad() {
        super.viewDidLoad()
        print(station)

        let bounds = UIScreen.mainScreen().bounds.size

        let image = UIImage(named: station!.logo_url)
        let margin = CGFloat(62)
        let newHeight = (image!.size.height / image!.size.width) * (bounds.width - margin - margin)
        
        let imageView = UIImageView(frame: CGRectMake(margin, margin, bounds.width - margin - margin, newHeight))
        
        imageView.image = image

        imageView.contentMode = UIViewContentMode.ScaleAspectFit
        
        textView = UITextView(frame: CGRectMake(margin, margin + margin + newHeight, bounds.width - margin - margin, 90))
        textView.text = "..."
        textView.textAlignment = .Center
        textView.backgroundColor = UIColor(red:1, green:1, blue:1, alpha:1)

        let overlayView = UIView(frame: CGRectMake(0, 0, bounds.width, bounds.height))
        overlayView.addSubview(imageView)
        overlayView.addSubview(textView)

        contentOverlayView?.addSubview(overlayView)
        
        // don't allow skipping
        self.showsPlaybackControls = false
        self.requiresLinearPlayback = true

        nowPlayingUrl = "http://player.pinguinradio.com/index.php?c=" + station!.tag
        getCurrentlyPlaying()
        nowPlayingTimer = NSTimer.scheduledTimerWithTimeInterval(10, target: self, selector: "getCurrentlyPlaying", userInfo: nil, repeats: true)

        player = AVPlayer(URL: NSURL(string: station!.stream_url)!)
        player?.play()
    }

    override func viewWillDisappear(animated: Bool) {
        nowPlayingTimer.invalidate()
        nowPlayingTimer = nil
        super.viewWillDisappear(animated)
    }

    func getCurrentlyPlaying() {
        
        if let url = NSURL(string: nowPlayingUrl ) {
            print(nowPlayingUrl)
            if let data = NSData(contentsOfURL: url){
                do {
                    let parsed = try NSJSONSerialization.JSONObjectWithData(data, options: NSJSONReadingOptions.AllowFragments) as? Dictionary<String, String>
                    print(parsed)
                    var newText = ""
                    newText += parsed!["artist"]!
                    newText += " - "
                    newText += parsed!["title"]!
                    textView.text = newText
                }
                catch let error as NSError {
                    print("A JSON parsing error occurred, here are the details:\n \(error)")
                }
            }
        }
    }
}
