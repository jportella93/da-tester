
var mocks = {

  instatags: {
    tags : [
    {tags : ['mountain', 'snow', 'holiday']},
    {tags : ['mountain', 'snow', 'holiday']},
    {tags : ['mountain', 'perro', 'playa']},
    {tags : ['mountain', 'gato', 'cyka bliat']},
    ],
    arraySorted : [
      { tag: 'mountain', freq: 4 },
      { tag: 'snow', freq: 2 },
      { tag: 'holiday', freq: 2 },
      { tag: 'perro', freq: 1 },
      { tag: 'playa', freq: 1 },
      { tag: 'gato', freq: 1 },
      { tag: 'cyka bliat', freq: 1 },
    ],
    arrayFiltered : [
      { tag: 'mountain', freq: 4 },
      { tag: 'snow', freq: 2 },
      { tag: 'holiday', freq: 2 },
    ],
    arrayFilteredMedia : [
      {tags : ['mountain', 'perro', 'playa']},
    ]
  },
  underline: {
    arr : [
      { tag: 'mountain', freq: 4 },
      { tag: 'snow', freq: 2 },
      { tag: 'holiday', freq: 2 },
      { tag: 'perro', freq: 1 },
      { tag: 'playa', freq: 1 },
      { tag: 'gato', freq: 0 },
      { tag: 'cyka bliat', freq: 1 },
    ],
    maxObj: { tag: 'mountain', freq: 4 },
    minObj: { tag: 'gato', freq: 0 },
  }
};

module.exports = mocks;
