import { loadFixture, testVM } from '../../../tests/utils'

describe('menu', () => {
  beforeEach(loadFixture(__dirname, 'menu'))
  testVM()
})
