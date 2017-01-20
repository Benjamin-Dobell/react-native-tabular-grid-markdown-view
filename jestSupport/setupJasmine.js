/**
 * Add custom settings to Jasmine.
 */

/*globals jasmine*/

var jasmineReporters = require('jasmine-reporters');
var reporter = new jasmineReporters.JUnitXmlReporter({savePath: 'output/', consolidateAll: false});
jasmine.getEnv().addReporter(reporter);
