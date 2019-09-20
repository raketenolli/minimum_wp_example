const seleniumOptions = {
    drivers: {
        chrome: {
            version: '76.0.3809.126'
        }
    }
};

var config = {
    runner: 'local',

    path: '/wd/hub',

    specs: [
        './spec/**/*.spec.js'
    ],

    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 1,

    services: [ 'selenium-standalone' ],
    seleniumArgs: seleniumOptions,
    seleniumInstallArgs: seleniumOptions,

    capabilities: [{
        browserName: 'chrome',
    }],

    logLevel: 'error', // trace | debug | info | warn | error | silent
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    
    framework: 'jasmine',
    reporters: [ 'spec' ],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 100000,
        expectationResultHandler: function(passed, assertion) {
            // do something
        }
    },
    
    // onPrepare: function (config, capabilities) {
    // },

    // beforeSession: function (config, capabilities, specs) {
    // },

    before: function (capabilities, specs) {
        browser.maximizeWindow();
    },

    // beforeCommand: function (commandName, args) {
    // },

    // beforeSuite: function (suite) {
    // },

    // beforeTest: function (test) {
    // },

    // beforeHook: function () {
    // },

    // afterHook: function () {
    // },

    // afterTest: function (test) {
    // },

    // afterSuite: function (suite) {
    // },

    // afterCommand: function (commandName, args, result, error) {
    // },

    after: function (result, capabilities, specs) {
        // no logout because the authentication dialog will interfere with 
        // the test and disable closing the window and ending the session
    },

    // afterSession: function (config, capabilities, specs) {
    // },

    // onComplete: function(exitCode, config, capabilities, results) {
    // },

    //onReload: function(oldSessionId, newSessionId) {
    //}
}

if(process.env.LOCAL_BROWSER_PATH) {
    Object.assign(config.capabilities[0], {
        'goog:chromeOptions': {
            binary: process.env.LOCAL_BROWSER_PATH
        }
    });
}
exports.config = config;