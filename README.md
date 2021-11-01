# AngularEdisonHoxha

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## ng add (recommended)
`ng add angular-calendar`

## Manual setup (ng add will do this all for you)
First install through npm:

`npm install --save angular-calendar date-fns`

Finally import the calendar module into your apps module:

```import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CommonModule } from '@angular/common';

@NgModule({
imports: [
BrowserAnimationsModule,
CalendarModule.forRoot({
provide: DateAdapter,
useFactory: adapterFactory,
CommonModule,
}),
],
})
export class MyModule {}
```

## Node modules

Run `npm i` to install all modules of project. The app will automatically create the folder `node_modules`.
In this project have been used modules like: `angular-calendar,angular material`.
Project starts with login page and after login is successfully the page redirected to calendar page. For Calendar is used 
angular-calendar module.

## Angular Material
Tables, Modal, Inputs

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
