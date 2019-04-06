import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, Inject, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GuardsModule } from './services/guards/guards.module';
import { AppRoutingModule } from './app-routing.module';
import { CONFIG_URL } from './services/config-service/config-url.token';
import { ConfigService } from './services/config-service/config.service';
import { configServiceFactory } from './services/config-service/config-service.factory';
import { APP_CONFIG } from './config/app.config.token';
import { configFactory } from './services/config-service/config.factory';
import { HttpClientModule } from '@angular/common/http';
import { Test1Component } from './modules/components/test1/test1.component';
import { Test2Component } from './modules/components/test2/test2.component';


@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
  ],
  imports: [
    BrowserModule,
    GuardsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ConfigService,
    {
      provide: CONFIG_URL,
      useValue: '/assets/config/config.json',
    },
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [ConfigService, [new Inject(CONFIG_URL)]],
      multi: true,
    },
    {
      provide: APP_CONFIG,
      useFactory: configFactory,
      deps: [ConfigService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
