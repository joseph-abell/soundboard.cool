var vows = require('vows'),
	assert = require('assert');

exports.defaultTests = vows.describe('default tests to make sure our tests are working').addBatch({
	'When checking if true equals true': {
		"we get true": function () {
			assert.equal( true, true );
		}
	},
	'When checking if true is false': {
		"We get false": function () {
			assert.notEqual(true, false);
		}
	}
});