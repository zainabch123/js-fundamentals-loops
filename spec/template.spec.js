const { a, b } = require('../src/template.js')

describe('example functions', () => {
  it('Check array of 7 7s', () => {
    expect(a).toEqual([7, 7, 7, 7, 7, 7, 7])
  })

  it('Check object properties', () => {
    expect(b.hi).toBe('Hello')
    expect(b.doubleFun(2)).toBe(4)
    expect(b.empty).toBe(null)
    expect(b.eightSevens).toEqual([7, 7, 7, 7, 7, 7, 7, 7])
  })
})
