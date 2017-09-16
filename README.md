# Progresive web aplication
- Vytvořit manifest.json pro instalůaci a přispůsobení aplikace a uložit do /src/
- Editovat angular-cli.json a nastavit serviceWorker: true
- Vytvořit ngsw-manifest.json a uložit do rootu aplikace:
{
  "routing": {
    "index": "/index.html",
    "routes": {
      "/": {
        "prefix": false
      },
      "/user-profile": {
        "prefix": false
      }
    }
  }
}

##TODO:
- vyřešit ruční definice routování pro ngsw-manifest pro aktivaci cache na routě
- vyřešit update aplikace(web workeru) po vydání nové verze
- umístit na server pod https
- zjistit jak funguje kešování zdrojů(obrázky, styly a pod.)



# MyMobile

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
