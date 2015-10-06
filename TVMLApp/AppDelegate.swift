//
//  AppDelegate.swift
//  TVMLApp
//
//  Created by Eduardo Rangel on 10/4/15.
//  Copyright © 2015 Concrete Solutions. All rights reserved.
//

import UIKit
import TVMLKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, TVApplicationControllerDelegate {
    var window: UIWindow?
    var appController: TVApplicationController?
    
    static let TVBaseURL = "http://localhost:9001/"
    static let TVBootURL = "\(AppDelegate.TVBaseURL)js/Application.js"
    
    func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
        window = UIWindow(frame: UIScreen.mainScreen().bounds)
        
        let appControllerContext = TVApplicationControllerContext()
        
        guard let javaScriptURL = NSURL(string: AppDelegate.TVBootURL) else { fatalError("Erro ao criar o NSURL.") }
        
        appControllerContext.javaScriptApplicationURL = javaScriptURL
        appControllerContext.launchOptions["BASEURL"] = AppDelegate.TVBaseURL
        
        appController = TVApplicationController(context: appControllerContext, window: window, delegate: self)
        
        return true
    }
}