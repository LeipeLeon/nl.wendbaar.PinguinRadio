//
//  StationsCollectionViewController.swift
//  PinguinRadio
//
//  Created by Leon Berenschot on 21/12/15.
//  Copyright © 2015 wendbaar.nl. All rights reserved.
//

import UIKit

private let reuseIdentifier = "StationCell"
private var stations: NSArray!

class StationsCollectionViewController: UICollectionViewController {

    let stations = [
        Station(tag: "PinguinRadio",      stream_url: "http://pr320.pinguinradio.com/listen.pls", title: "Pinguin Radio",         logo_url:"logo.PinguinRadio"),
        Station(tag: "PinguinontheRocks", stream_url: "http://po192.pinguinradio.com/listen.pls", title: "Pinguin on the Rocks",  logo_url:"logo.PinguinontheRocks"),
        Station(tag: "PinguinClassics",   stream_url: "http://pc192.pinguinradio.com/listen.pls", title: "Pinguin Classics",      logo_url:"logo.PinguinClassics"),
        Station(tag: "PinguinGrooves",    stream_url: "http://pg192.pinguinradio.com/listen.pls", title: "Pinguin Grooves",       logo_url:"logo.PinguinGrooves"),
        Station(tag: "Aardschok",         stream_url: "http://as192.pinguinradio.com/listen.pls", title: "Aardschok Radio",       logo_url:"logo.Aardschok"),
        Station(tag: "Skaradio",          stream_url: "http://sr192.pinguinradio.com/listen.pls", title: "Skaradio",              logo_url:"logo.Skaradio")
    ]
    override func viewDidLoad() {
        super.viewDidLoad()

        // Uncomment the following line to preserve selection between presentations
        // self.clearsSelectionOnViewWillAppear = false

        // Register cell classes
        // self.collectionView!.registerClass(StationCollectionViewCell.self, forCellWithReuseIdentifier: reuseIdentifier)
        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        // Get the new view controller using [segue destinationViewController].
        // Pass the selected object to the new view controller.
    }
    */

    // MARK: UICollectionViewDataSource

    override func numberOfSectionsInCollectionView(collectionView: UICollectionView) -> Int {
        // #warning Incomplete implementation, return the number of sections
        return 1
    }


    override func collectionView(collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return stations.count
    }

    override func collectionView(collectionView: UICollectionView, cellForItemAtIndexPath indexPath: NSIndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCellWithReuseIdentifier(reuseIdentifier, forIndexPath: indexPath) as! StationCollectionViewCell
        cell.backgroundColor = UIColor(red:0.13, green:0.11, blue:0.35, alpha:1)
        // Configure the cell
        let img = UIImage(named: stations[indexPath.row].logo_url)
        cell.logo.image = img
        cell.logo.backgroundColor = UIColor(red:0.13, green:0.11, blue:0.35, alpha:1)
        return cell
    }
    override func collectionView(collectionView: UICollectionView, didSelectItemAtIndexPath indexPath: NSIndexPath)
    {
//        selected_station = stations[indexPath.row]
        self.performSegueWithIdentifier("showPlayer", sender: indexPath)
        
    }
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        if "showPlayer" == segue.identifier {
            let playerViewController = segue.destinationViewController as! PlayerViewController
            playerViewController.station = stations[sender!.row]
        }
    }

    // MARK: UICollectionViewDelegate

    /*
    // Uncomment this method to specify if the specified item should be highlighted during tracking
    override func collectionView(collectionView: UICollectionView, shouldHighlightItemAtIndexPath indexPath: NSIndexPath) -> Bool {
        return true
    }
    */

    /*
    // Uncomment this method to specify if the specified item should be selected
    override func collectionView(collectionView: UICollectionView, shouldSelectItemAtIndexPath indexPath: NSIndexPath) -> Bool {
        return true
    }
    */

    /*
    // Uncomment these methods to specify if an action menu should be displayed for the specified item, and react to actions performed on the item
    override func collectionView(collectionView: UICollectionView, shouldShowMenuForItemAtIndexPath indexPath: NSIndexPath) -> Bool {
        return false
    }

    override func collectionView(collectionView: UICollectionView, canPerformAction action: Selector, forItemAtIndexPath indexPath: NSIndexPath, withSender sender: AnyObject?) -> Bool {
        return false
    }

    override func collectionView(collectionView: UICollectionView, performAction action: Selector, forItemAtIndexPath indexPath: NSIndexPath, withSender sender: AnyObject?) {
    
    }
    */

}
