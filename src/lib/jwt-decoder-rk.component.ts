import { Component } from '@angular/core';
import { Token } from '../models/token';


@Component({
  selector: 'lib-jwt-decoder-rk',
  template: ` <p>jwt-decoder-rk works!</p> `,
  styles: [],
})
export class JwtDecoderRk implements Token {
 private decode = (token: string) =>
    decodeURIComponent(
      atob(token.split('.')[1].replace('-', '+').replace('_', '/'))
        .split('')
        .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join('')
    );

 public decodeToken(token: string) {
    return token ? this.decode(token) : new Error('Token not valid');
  }
}
