'use strict';

var 
    testFw = require('../index'),
    assert = testFw.assert;

suite('assert', function () {

    test('standard assertions', function (done) {

        assert.isNull(null);
        assert.isNotNull(true);

        assert.isTrue(true);
        assert.isFalse(false);

        done();
    });

    test('extended assertions', function (done) {

        assert.equalAsStrings(1.0, '1');
        assert.equalAsObjectIds('000000000000000000000001', '000000000000000000000001');

        assert.more(2, 1);
        assert.equalOrMore(2, 1);
        assert.less(1, 2);
        assert.equalOrLess(1, 2);

        assert.resultError('Error', null);
        assert.result(null, { data: {} });
        assert.resultOk(null, 'OK');
        assert.resultNull(null, null);
        assert.resultEmpty(null, {});
        assert.resultArray(null, [1, 2, 3], 3);

        done();
    });

});
