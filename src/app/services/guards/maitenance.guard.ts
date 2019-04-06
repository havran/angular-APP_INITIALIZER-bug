import {Inject, Injectable} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {APP_CONFIG} from '../../config/app.config.token';
import {AppConfig} from '../../config/app.config';

@Injectable()
export class MaitenanceGuard implements CanActivate, CanLoad {
  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig) {
    console.log(
      '~~~> MaitenanceGuard#constructor | appConfig:',
      (this.appConfig ? 'OK: appConfig is loaded' : 'ERROR: appConfig is empty')
    );
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return true;
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
