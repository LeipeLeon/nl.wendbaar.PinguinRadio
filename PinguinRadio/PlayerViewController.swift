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
        
        let overlayView = UIView(frame: CGRectMake(0, 0, bounds.width, bounds.height))
        overlayView.addSubview(imageView)

        contentOverlayView?.addSubview(overlayView)
        
        // don't allow skipping
        self.showsPlaybackControls = false
        self.requiresLinearPlayback = true

        player = AVPlayer(URL: NSURL(string: station!.stream_url)!)
        player?.play()
    }
}
