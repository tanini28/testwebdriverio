import { config as baseConfig } from './wdio.conf.js';

export const config = {
    ...baseConfig,
    // Switch to Cucumber framework
    framework: 'cucumber',
    
    // Define Cucumber-specific options
    cucumberOpts: {
        // Specify where step definitions are located
        require: ['./test/steps/**/*.js'],
        // Enable/disable backtrace
        backtrace: false,
        // Name of the feature files
        featureFiles: ['./test/features/**/*.feature'],
        // Only run scenarios with specific tags
        tagExpression: '',
        // Set timeout for steps
        timeout: 60000
    },
    
    // Update specs to point to feature files
    specs: [
        './test/features/**/*.feature'
    ]
};