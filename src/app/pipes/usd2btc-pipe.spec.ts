import { Usd2btcPipe } from './usd2btc-pipe';

describe('Usd2btcPipe', () => {
  it('create an instance', () => {
    const pipe = new Usd2btcPipe();
    expect(pipe).toBeTruthy();
  });
});
