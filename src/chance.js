/**
 * @file Extra random data generators 
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global */

'use strict';

var
    IMAGE_EXTS = ['.jpg', '.png', '.bmp', '.gif'],
    DOCUMENT_EXTS = ['.dat', '.doc', '.txt', '.js', '.pdf'],

    chance = require('chance').Chance(),
    fs = require('fs');


chance.url = function() {
    return 'http://www.' + chance.domain();
};

chance.text = function() {
    return chance.paragraph({ sentences: 20 });
};

chance.avatarStream = function() {
    return fs.createReadStream(__dirname + '/avatars/' + chance.natural({ min: 1, max: 5 }) + '.png');
};

chance.pictureFileName = function() {
    return chance.word({ length: 15 }) + chance.pick(IMAGE_EXTS);
};

chance.pictureStream = function() {
    return fs.createReadStream(__dirname + '/pictures/' + chance.natural({ min: 1, max: 5 }) + '.jpg');
};

chance.smallPictureStream = function() {
    return fs.createReadStream(__dirname + '/pictures/' + chance.natural({ min: 3, max: 4 }) + '.jpg');
};

chance.documentFileName = function() {
    return chance.word({ length: 15 }) + chance.pick(DOCUMENT_EXTS);
};

chance.documentStream = function() {
    return fs.createReadStream(__dirname + '/docs/' + chance.natural({ min: 1, max: 5 }) + '.dat');
};

module.exports = chance;
