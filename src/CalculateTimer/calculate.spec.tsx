
const calculate = require('./calculate');

describe('claculate function test', () => {

    
  it('should return an array' ,() => {

 expect(calculate.default(0)).toEqual(['00','00','00']);

   
});
})
