import subDate from './sub-date'

describe('@utils/format-date', () => {
  it('correctly substract dates days apart', () => {
    const date = new Date(2002, 5, 20)
    const substractedDate = subDate(date, {
      days: 10,
    })
    expect(substractedDate).toEqual(new Date(2002, 5, 10))
  })

  it('correctly substract dates months apart', () => {
    const date = new Date(2002, 5, 20)
    const substractedDate = subDate(date, {
      months: 1,
    })
    expect(substractedDate).toEqual(new Date(2002, 4, 20))
  })

  it('correctly substract dates years apart', () => {
    const date = new Date(2002, 5, 20)
    const substractedDate = subDate(date, {
      years: 10,
    })
    expect(substractedDate).toEqual(new Date(1992, 5, 20))
  })

  it('correctly substract dates weeks apart', () => {
    const date = new Date(2002, 5, 20)
    const substractedDate = subDate(date, {
      weeks: 2,
    })
    expect(substractedDate).toEqual(new Date(2002, 5, 6))
  })
})
