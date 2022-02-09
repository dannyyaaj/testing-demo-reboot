import { compute } from './compute';

//suite - group of related tests
describe('compute', () => {
  //spec - test
  it('should return 0 if input is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  })

  //

})

