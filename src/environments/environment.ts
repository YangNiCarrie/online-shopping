// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { config } from './config.js';

export const environment = {
  production: false,
  firebase: {
    apiKey: config.apiKey,
    authDomain: config.autoDomain,
    databaseURL: config.databaseURL,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId    
  }
};
