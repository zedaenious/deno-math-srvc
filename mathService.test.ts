import { assert } from "https://deno.land/std@0.209.0/testing/asserts.ts";
import { MathService } from './mathService.ts';

Deno.test('MathService', () => {
  const sut = new MathService();
  const result = sut.sum([1, 3, 5]);
  assert(result, 9);
})