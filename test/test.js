'use strict';

require('chai').should();

var methods = require('../index.js');
var instatags = methods.instatags;
var underline = methods.underline;
var mocks = require('./mocks.js');
var assert = require('chai').assert;

describe('Instatags', function () {

  describe('evalHashtagFrequency', function () {
    it('should return an empty array when input is not an array', function () {
      instatags.evalHashtagFrequency(0).should.deep.equal([]);
      instatags.evalHashtagFrequency(null).should.deep.equal([]);
      instatags.evalHashtagFrequency(undefined).should.deep.equal([]);
      instatags.evalHashtagFrequency('string').should.deep.equal([]);
      instatags.evalHashtagFrequency({}).should.deep.equal([]);
    });
    it('should return an empty array when data is not an array', function () {
      assert.equal(typeof instatags.evalHashtagFrequency(mocks.instatags.tags), typeof []);
    });
    it('should sort tags by frequency', function () {
      instatags.evalHashtagFrequency(mocks.instatags.tags).should.deep.equal(mocks.instatags.arraySorted);
    });
  });

  describe('filterTags', function () {
    it ('should return filter array with the specified frequency', function () {
      instatags.filterTags(instatags.evalHashtagFrequency(mocks.instatags.tags), 2).should.deep.equal(mocks.instatags.arrayFiltered);
    });

    it ('should have a frequeny parameter bigger or equal to 0', function () {
      instatags.filterTags(instatags.evalHashtagFrequency(mocks.instatags.tags), -1).should.deep.equal(instatags.evalHashtagFrequency(mocks.instatags.tags));
      instatags.filterTags(instatags.evalHashtagFrequency(mocks.instatags.tags), null).should.deep.equal(instatags.evalHashtagFrequency(mocks.instatags.tags));
      instatags.filterTags(instatags.evalHashtagFrequency(mocks.instatags.tags), 'string').should.deep.equal(instatags.evalHashtagFrequency(mocks.instatags.tags));
      instatags.filterTags(instatags.evalHashtagFrequency(mocks.instatags.tags), []).should.deep.equal(instatags.evalHashtagFrequency(mocks.instatags.tags));
    });

    it('should return an empty array when tags is not an array', function () {
      assert.equal(typeof instatags.filterTags(instatags.evalHashtagFrequency(-1, 2)), typeof []);
    });
  });

  describe('filterMedia', function () {
    it ('should return filter array with the specified tag', function () {
      instatags.filterMedia(mocks.instatags.tags, 'playa').should.deep.equal(mocks.instatags.arrayFilteredMedia);
    });

    it ('should have a string as tag parameter and string length longer than ', function () {
      instatags.filterMedia(mocks.instatags.tags, '').should.deep.equal(mocks.instatags.tags);
      instatags.filterMedia(mocks.instatags.tags, null).should.deep.equal(mocks.instatags.tags);
      instatags.filterMedia(mocks.instatags.tags, 2).should.deep.equal(mocks.instatags.tags);
      instatags.filterMedia(mocks.instatags.tags, []).should.deep.equal(mocks.instatags.tags);
    });

    it('should return an empty array when userMedia is not an array', function () {
      assert.equal(typeof instatags.filterMedia(-1, 'mountain'), typeof []);
    });
  });
});

describe('Underline', function () {

  describe('max', function () {
    it('should return max element from array of objects', function () {
      underline.max(mocks.underline.arr, function (el) {return el.freq;}).should.deep.equal(mocks.underline.maxObj);
    });
    it('should return max element from an array of numbers', function () {
      underline.max([1,2,3,4,5,6,7,4]).should.deep.equal(7);
    });
    it('should ignore letters', function () {
      underline.max([1,2,3,'a',5,'b',7,4]).should.deep.equal(7);
    });
    it('should return -Infinity if list is an empty array', function () {
      assert.equal(underline.max([]), Number.NEGATIVE_INFINITY);
    });
  });

  describe('min', function () {
    it('should return min element from array of objects', function () {
      underline.min(mocks.underline.arr, function (el) {return el.freq;}).should.deep.equal(mocks.underline.minObj);
    });
    it('should return min element from an array of numbers', function () {
      underline.min([1,2,3,4,5,6,7,4]).should.deep.equal(1);
    });
    it('should ignore letters', function () {
      underline.min([1,2,3,'a',5,'b',7,4]).should.deep.equal(1);
    });
    it('should return Infinity if list is an empty array', function () {
      assert.equal(underline.min([]), Number.POSITIVE_INFINITY);
    });
  });

  describe('size', function () {
    it('should return the size of the array', function () {
      underline.size(mocks.underline.arr).should.deep.equal(mocks.underline.arr.length);
    });

    it('should return the size of the object', function () {
      underline.size(mocks.underline.maxObj).should.deep.equal(2);
    });

    it('should return 0 if param is not iterable', function () {
      underline.size(2).should.deep.equal(0);
      underline.size(null).should.deep.equal(0);
    });

    it('should work on strings', function () {
      underline.size('string').should.deep.equal(6);
    });
  });
});
