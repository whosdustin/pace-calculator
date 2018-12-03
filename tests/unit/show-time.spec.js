import {
  mount
} from '@vue/test-utils'
import ShowTime from '@/components/ShowTime.vue'

describe('ShowTime', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ShowTime)
  })

  it('hides hours when hours equals 0', () => {
    wrapper.setData({
      hours: 0
    })
    expect(toSee('.hours')).toBe(false)
  })

  it('hides minutes when minutes AND hours number equals 0', () => {
    wrapper.setData({
      hours: 0,
      minutes: 0
    })
    expect(toSee('.minutes')).toBe(false)
  })

  it('shows minutes when minutes equals 0 AND hours is greater than 0', () => {
    wrapper.setData({
      hours: 1,
      minutes: 0
    })
    expect(toSee('.minutes')).toBe(true)
  })

  it('contains -- when seconds, minutes, AND hours equal 0', () => {
    wrapper.setData({
      hours: 0,
      minutes: 0,
      seconds: 0
    })
    expect(innerContent('.seconds')).toContain('--')
  })

  it('does NOT contain -- when seconds equals 0 AND minutes OR hours does NOT', () => {
    wrapper.setData({
      hours: 2,
      minutes: 0,
      seconds: 0
    })
    expect(innerContent('.seconds')).not.toContain('--')
  })

  it('contains the title of the time type', () => {
    wrapper.setProps({ title: 'Title' })

    expect(innerContent('.title')).toContain('Title')
  })

  // Helpers
  let innerContent = (element) => wrapper.find(element).html()
  let toSee = (element) => wrapper.contains(element)
})
