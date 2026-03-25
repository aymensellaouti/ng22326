import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONST } from '../config/app-constantes.config';

@Pipe({
  name: 'btc2usd'
})
export class Btc2usdPipe implements PipeTransform {

  transform(amount: number, isBtcUsd = true): number {
    return isBtcUsd ? amount * APP_CONST.btcUsd : amount / APP_CONST.btcUsd;
  }

}
