import { loadFixture, testVM } from '../../../tests/utils'

const variantList = [
  'secondary',
  'primary',
  'success',
  'info',
  'warning',
  'danger',
  'dark',
  'light'
].map(variant => {
  return { ref: `avatar_${variant}`, variant }
})

describe('avatar', () => {
  beforeEach(loadFixture(__dirname, 'avatar'))
  testVM()

  it('should apply variant classes', async () => {
    const {
      app: { $refs }
    } = window

    variantList.forEach(({ ref, variant }) => {
      expect($refs[ref][0]).toHaveAllClasses(['avatar', `avatar-${variant}`])
    })
  })

  it('should apply secondary class when not passed variant', async () => {
    const {
      app: { $refs }
    } = window

    const vm = $refs.no_props
    expect(vm).toHaveClass('avatar-secondary')
  })

  it('should not apply pill class when not passed rounded boolean prop or square boolean prop', async () => {
    const {
      app: { $refs }
    } = window

    const vm = $refs.no_props
    expect(vm).not.toHaveClass('avatar-rounded')
    expect(vm).not.toHaveClass('avatar-square')
  })
})
