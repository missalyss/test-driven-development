const chai = require('chai')
const assert = chai.assert
const sortAnimals = require('../src/animal-sorter');
// [array] => sort by name
// [array] => sort by age
// [array] => sort by mouthfeel, boolean => sort by mouthfeel in reverse

describe('#sortAnimals', () => {
  describe('Input is valid', () => {
    it('It should return a new array if the list of animals is empty', () => {
      assert.deepEqual(sortAnimals([]), [], 'Empty array of animals should return empty array')
    })

  })

})

// [
//   {
//     name: {
//       required: true,
//       type: 'string'
//     },
//     species: {
//       required: true,
//       type: 'string'
//     },
//     mouthfeel: {
//       required: false,
//       type: 'string'
//     },
//     age: {
//       required: true,
//       type: 'number'
//     }
//   }
// ]
