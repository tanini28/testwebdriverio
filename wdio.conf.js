export const config = {
    runner: 'local',
   specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
       
    ],
    
    maxInstances: 3, 
    
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                '--disable-dev-shm-usage',
                '--headless',
                '--disable-gpu',
                '--window-size=1440,735'
            ]
        },
        acceptInsecureCerts: true
    }],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com',
    
  
    waitforTimeout: 20000, 
    connectionRetryTimeout: 180000,
    connectionRetryCount: 5, 
    
    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 90000 
    },
    

    before: function (capabilities, specs) {
        browser.setTimeout({ 'pageLoad': 30000, 'script': 30000 });
    },
    
  
    specFileRetries: 2,
    specFileRetriesDelay: 1
}