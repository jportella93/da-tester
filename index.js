
var _ = require('lodash');

var methods = {

  instatags: {

    evalHashtagFrequency: function (data) {

      if (!Array.isArray(data)) return [];

      var tags = {};

      data.forEach(function (media) {
        media.tags.forEach(function (tag) {
          if (tags[tag]) tags[tag]++;
          else tags[tag] = 1;
        });
      });

      // Here we transform the tags object into an array, so we'll be able to sort it.
      var sortable = [];
      for (var tag in tags) {
        sortable.push({
          tag: tag,
          freq: tags[tag]
        });
      }

      // Finally we have to sort the array in descending order (higher frequencies first),
      // and return it. Check the "Array.prototype.sort()" docs.
      return sortable.sort(function (a, b) {
        return b.freq - a.freq;
      });
    },

    filterTags: function (tags, minFrequency) {
      if (!Array.isArray(tags)) return [];
      if (!(typeof minFrequency === 'number' && minFrequency > 0)) return tags;

      var filtered = [];
      tags.forEach(function (tag) {
        if (tag.freq >= minFrequency) filtered.push(tag);
      });
      return filtered;
    },

    filterMedia: function (userMedia, tag) {
      if (!Array.isArray(userMedia)) return [];
      if (!(typeof tag === 'string' && tag.length > 0)) return userMedia;

      var filtered = [];
      userMedia.forEach(function (media) {
        if (media.tags.includes(tag)) filtered.push(media);
      });
      return filtered;
    }

  },

  underline: {

    max: function (list, iteratee, context) {
      if (list.length === 0) return Number.NEGATIVE_INFINITY;
      let maxValue;
      let elementOfMaxValue;
      //iterate over elements of the list
      list.forEach(el => {
        //if there is iteratee, apply to each element of the list
        //If not, use element
        if (typeof iteratee !== 'function' && typeof el !== 'number') return;
        let value = typeof iteratee === 'function' ? iteratee.call(context, el) : el;
        //compare the results of the iteratee with the stored result. If there is not
        //stored result, the first element is assigned to the stored result.
        if (value > maxValue || typeof maxValue === 'undefined') {
          maxValue = value;
          elementOfMaxValue = el;
        }
      });
      //Return full element with biggest result
      return elementOfMaxValue;
    },

    // var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
    // _.max(stooges, function(stooge){ return stooge.age; });
    // => {name: 'curly', age: 60};

    min: function (list, iteratee, context) {
      if (list.length === 0) return Number.POSITIVE_INFINITY;
      let minValue;
      let elementOfMinValue;
      //iterate over elements of the list
      list.forEach(el => {
        //if there is iteratee, apply to each element of the list
        //If not, use element
        if (typeof iteratee !== 'function' && typeof el !== 'number') return;
        let value = typeof iteratee === 'function' ? iteratee.call(context, el) : el;
        //compare the results of the iteratee with the stored result. If there is not
        //stored result, the first element is assigned to the stored result.
        if (value < minValue || typeof minValue === 'undefined') {
          minValue = value;
          elementOfMinValue = el;
        }
      });
      //Return full element with biggest result
      return elementOfMinValue;
    },

    size: function (list) {
      if (list === null) return 0;
      let total = 0;
      if (list.constructor === Object) {
        for (let element in list) {
          total++;
        }
      } else if (typeof list === 'object' || typeof list === 'string') {
        total = list.length;
      }
      return total;
    }
  }
};

module.exports = methods;
