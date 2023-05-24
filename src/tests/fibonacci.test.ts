import { fibonacci } from '../core/fibonacci'


// 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597 

describe('fibonacci', () => {
	it('first time returns 0', () => {
		expect(fibonacci(0)).toBe(0)
	})
	it('second time returns 1', () => {
		expect(fibonacci(1)).toBe(1)
	})
	it('each time is the sum of the preceding two numbers', () => {
		expect(fibonacci(2)).toBe(fibonacci(0) + fibonacci(1))
		expect(fibonacci(3)).toBe(fibonacci(2) + fibonacci(1))
		expect(fibonacci(4)).toBe(fibonacci(3) + fibonacci(2))
		expect(fibonacci(5)).toBe(fibonacci(4) + fibonacci(3))
		expect(fibonacci(8)).toBe(21)
	})
})

