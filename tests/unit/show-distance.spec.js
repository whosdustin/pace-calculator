import { shallowMount } from '@vue/test-utils'
import ShowDistance from '@/components/ShowDistance.vue'

describe('ShowDistance', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(ShowDistance)
  })

  it('shows distance default value is 0', () => {
    expect(textOf('.distance')).toBe('0')
  })

  it('shows a default distance unit of mi', () => {
    expect(textOf('.unit')).toBe('mi')
  })

  it('changes the unit of measurement', () => {
    selectOption('select', 1)
    expect(textOf('.unit')).toBe('k')
  })

  it('converts miles to kilometers', () => {
    wrapper.setData({
      distance: 1
    })

    selectOption('select', 1) // Index in units Array
    expect(textOf('.distance')).toBe('1.6')
  })

  it('converts kilometers to miles', () => {
    wrapper.setData({
      distance: 1,
      currentUnit: 'k'
    })

    selectOption('select', 0) // Index in units Array
    expect(textOf('.distance')).toBe('0.6')
  })

  it('converts miles to meters', () => {
    wrapper.setData({
      distance: 1
    })

    selectOption('select', 2) // Index in units Array
    expect(textOf('.distance')).toBe('1609.3')
  })

  it('converts miles to yards AND drops decimal if equals 0', () => {
    wrapper.setData({ distance: 1 })

    selectOption('select', 3)
    expect(textOf('.distance')).toBe('1760')
  })

  let textOf = (element) => wrapper.find(element).text()

  function selectOption (element, index) {
    const options = wrapper.find(element).findAll('option')
    options.at(index).setSelected()
  }
})
