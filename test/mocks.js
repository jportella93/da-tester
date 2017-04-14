
var mocks = {

  instatags: {

  },

  underline: {

  }

};

mocks.underline.iteratee = function (el, key, coll) {
  if (coll === mocks.underline.objArr) return el.age;
};

module.exports = mocks;
