import { describe, expect, it } from '@jest/globals';
import { main } from '../src/main';

describe('Hello World!', () => {
  it('doit retourner "Hello World!"', () => {
    expect(main()).toEqual('Hello World!');
  });
});
