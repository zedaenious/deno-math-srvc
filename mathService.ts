export class MathService {
  sum(numbers: number[]) {
    return numbers.reduce((val, num) => Number.isInteger(num) ? val + num : val, 0)
  }
}