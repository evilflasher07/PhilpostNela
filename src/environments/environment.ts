// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDzuQJGDA70nR_dolR3RNGwB51ofwS8J4o",
    authDomain: "philpost-nela.firebaseapp.com",
    databaseURL: "https://philpost-nela.firebaseio.com",
    projectId: "philpost-nela",
    storageBucket: "philpost-nela.appspot.com",
    messagingSenderId: "875065529001"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
