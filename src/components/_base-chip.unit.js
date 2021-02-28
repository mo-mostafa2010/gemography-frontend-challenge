import BaseChip from './_base-chip.vue'

describe('@components/_base-chip', () => {
  it('renders its value number', () => {
    const { element } = shallowMount(BaseChip, {
      propsData: {
        value: 10,
      },
    })
    expect(element.innerHTML).toContain(10)
  })

  it('renders its Key text', () => {
    const { element } = shallowMount(BaseChip, {
      propsData: {
        keyName: 'Test String',
      },
    })
    expect(element.innerHTML).toContain('Test String')
  })

  it('Does not accept non number value for value prop', () => {
    const { element } = shallowMount(BaseChip, {
      propsData: {
        value: 'Test String',
      },
    })
    expect(element.innerHTML).toContain(NaN)
  })
})
