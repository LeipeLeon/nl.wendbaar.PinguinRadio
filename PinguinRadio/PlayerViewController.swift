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

//    let overlayView = UIView(frame: CGRectMake(50, 50, 200, 200))
    var station: Station?

    override func viewDidLoad() {
        super.viewDidLoad()
        print(station)
        
//        overlayView.addSubview(UIImageView(image: UIImage(named: "tv-watermark")))
//        contentOverlayView?.addSubview(overlayView)
        
        player = AVPlayer(URL: NSURL(string: station!.stream_url)!)
        player?.play()
    }
}