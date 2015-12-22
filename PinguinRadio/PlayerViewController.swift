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

    var station: Station?

    override func viewDidLoad() {
        super.viewDidLoad()
        print(station)

        let bounds = UIScreen.mainScreen().bounds.size

        let imageView = UIImageView(frame: CGRectMake(40, 40, bounds.width - 80, bounds.height - 200))
        imageView.image = UIImage(named: station!.logo_url)
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
