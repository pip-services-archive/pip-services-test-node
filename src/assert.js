/**
 * @file Extra assertions 
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global */

'use strict';

var 
    _ = require('lodash'),
    assert = require('chai').assert;

assert.isNullOrUndefined = function (value, message) {
    if (typeof (value) != 'undefined') {
        assert.isNull(value, message);
    }
};

assert.isNullOrEmpty = function (value, message) {
    if (value != {}) {
        assert.isNull(value, message);
    }
};

assert.equalAsStrings = function (expected, actual, message) {
    expected = expected ? expected.toString() : null;
    actual = actual ? actual.toString() : null;
    assert.equal(expected, actual, message);
};

assert.equalAsObjectIds = assert.equalAsStrings;

assert.more = function (expected, actual, message) {
    assert.isTrue(expected > actual, message);
};

assert.equalOrMore = function (expected, actual, message) {
    assert.isTrue(expected >= actual, message);
};

assert.less = function (expected, actual, message) {
    assert.isTrue(expected < actual, message);
};

assert.equalOrLess = function (expected, actual, message) {
    assert.isTrue(expected <= actual, message);
};

assert.resultError = function (err, value) {
    assert.isNotNull(err);
};

assert.result = function (err, value) {
    if (err) {
        console.log(err);
    }

    assert.isNullOrUndefined(err);
    assert.isObject(value);
};

assert.resultOk = function (err, value) {
    if (err) {
        console.log(err);
    }

    assert.isNullOrUndefined(err);
    assert.equal(value, 'OK');
};

assert.resultNull = function (err, value) {
    if (err) {
        console.log(err);
    }

    assert.isNullOrUndefined(err);
    assert.isNullOrUndefined(value);
};

assert.resultEmpty = function (err, value) {
    if (err) {
        console.log(err);
    }

    assert.isNullOrUndefined(err);

    if (typeof (value) != 'undefined' && !_.isEmpty(value)) {
        assert.isNull(value);
    }

};

assert.resultArray = function (err, value, length) {
    if (err) {
        console.log(err);
    }

    assert.isNullOrUndefined(err);

    assert.isArray(value);

    if (length) {
        assert.lengthOf(value, length);
    }
};


module.exports = assert;