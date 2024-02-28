import { describe, expect, it } from '@jest/globals';
import { main } from 'three-layers/src/main.ts';

describe('Hello World!', () => {
  it('doit retourner "Hello World!"', () => {
    expect(main()).toEqual('Hello World!');
  });
});
