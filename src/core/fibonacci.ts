export function fibonacci(n:number): number {
  // if (n > 1) return n + 1


  if (n == 0) return 0
  if (n <= 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}
