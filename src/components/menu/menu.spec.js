import { loadFixture, testVM } from '../../../tests/utils'

describe('menu', async () => {
  beforeEach(loadFixture(__dirname, 'menu'))
  testVM()
})
