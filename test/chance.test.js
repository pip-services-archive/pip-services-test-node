'use strict';

var 
    testFw = require('../index'),
    assert = testFw.assert,
    chance = testFw.chance;

suite('chance', function () {

    test('standard data generators', function (done) {

        assert.isBoolean(chance.bool());
        assert.isNumber(chance.floating({ min: 0, max: 100 }));
        assert.isNumber(chance.integer({ min: -100, max: 100 }));
        assert.isString(chance.paragraph());

        done();
    });

    test('extended data generators', function (done) {

        assert.isString(chance.url());
        assert.isString(chance.text());

        assert.isObject(chance.avatarStream());

        assert.isString(chance.pictureFileName());
        assert.isObject(chance.pictureStream());

        assert.isString(chance.documentFileName());
        assert.isObject(chance.documentStream());

        done();
    });

});
