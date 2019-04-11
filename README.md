# Bug

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

If user open page protected by guard, and this guard want use some data from service which is initialized by APP_INITIALIZER, then guard is fire before Promise from service is resolved.

Demonstarte bug:

- Open page which is not protected by guard http://localhost:4201 
- Config service load config normally, protected routerLinks works (because config is loaded).
- You get console output:

```
Navigated to http://localhost:4201/
~~~> configServiceFactory called with configUrl: /assets/config/config.json
~~~> ConfigService#load: start
~~~> ConfigService#load: in http client response {apiUrl: "http://localhost:3000/api/graph"}
Angular is running in the development mode. Call enableProdMode() to enable the production mode.
```
- Open (or reload) page protected with guard http://localhost:4201/test1
- Config service start loading config, but guard, (which want use data from config), is fired before is config loaded (before httpClient.get Promise is resolved).
- You get console output:

```
Navigated to http://localhost:4201/test1
~~~> configServiceFactory called with configUrl: /assets/config/config.json
~~~> ConfigService#load: start
~~~> configFactory called
~~~> MaitenanceGuard#constructor | appConfig: ERROR: appConfig is empty
~~~> ConfigService#load: in http client response {apiUrl: "http://localhost:3000/api/graph"}
Angular is running in the development mode. Call enableProdMode() to enable the production mode.
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Run local development

- `yarn start `

Application is running on port 4201.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
