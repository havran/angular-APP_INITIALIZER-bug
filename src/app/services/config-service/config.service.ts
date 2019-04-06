import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class ConfigService {
  private _config: any;

  constructor(
    private httpClient: HttpClient,
  ) {}

  get config(): any {
    return this._config;
  }

  load(configUrl: string): Promise<any> {
    console.log('~~~> ConfigService#load: start');
    return this.httpClient
      .get(configUrl)
      .pipe(
        tap((response: Object) => {
          console.log('~~~> ConfigService#load: in http client response', response);
          this._config = response;
        }),
      )
      .toPromise();
  }
}
