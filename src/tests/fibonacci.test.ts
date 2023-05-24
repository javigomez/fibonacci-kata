import { fibonacci } from '../core/fibonacci'

describe('fibonacci', () => {
	it('first time returns 0', () => {
		expect(fibonacci(0)).toBe(0)
	})
})

