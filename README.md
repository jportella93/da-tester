# Da Tester

For this sprint you’ll convert yourself in “da tester”, the badass developer that can write code with good automated unit tests. For starters, read more about unit testing [here](https://en.wikipedia.org/wiki/Unit_testing). Ready to get your hands dirty now?

We’ve set up the testing environment for you. As you implement the actual tests you will first need to have some valid input: store your mocked data in  `test/mocks.js`. 

You have [lodash](https://lodash.com/) available in `index.js` and `/test/test.js`, make good use of it.

### Instatags

We have replicated 3 functions that are part of Instatags: 

- `evalHashtagFrequency()`
- `filterTags()`
- `filterMedia()`

You now need to write comprehensive tests for them, mocking out the data that they’re supposed to handle.

### Underline

Implement these 3 new methods using TDD (obviously without using their lodash equivalents):

- [`_.max()`](http://underscorejs.org/#max) 
- [`_.min()`](http://underscorejs.org/#min) 
- [`_.size()`](http://underscorejs.org/#size) 

For each one of them, start writing the simplest possible test (with the required mock data), check that it fails, then fix it adding the missing functionality to your code. Now consider a slightly more complicated test case, make sure it fails, and upgrade your code to fix it. Continue until you have considered all the edge cases and can’t come up with any failing test.

## Getting started

To install the required dependencies run `npm install` .

Each time you implement a new test, run `npm test` to check the outcome.

## Extra credits

Implement [`underline.chain()`](http://underscorejs.org/#chain) using TDD (obviously you’re not allowed to use `_.chain()`, or to look at its source code until you have finished).

