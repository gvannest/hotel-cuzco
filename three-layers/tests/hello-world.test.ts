import { describe, expect, it } from '@jest/globals';
import { HelloWorld } from 'three-layers/src/hello-world';

describe('Hello World!', () => {
  it('doit retourner "Hello World!"', () => {
    expect(HelloWorld()).toEqual('Hello World!');
  });
});
