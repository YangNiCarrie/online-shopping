import { config } from './config.js';

export const environment = {
  production: true,
  firebase: {
    apiKey: config.prod.apiKey,
    authDomain: config.prod.autoDomain,
    databaseURL: config.prod.databaseURL,
    projectId: config.prod.projectId,
    storageBucket: config.prod.storageBucket,
    messagingSenderId: config.prod.messagingSenderId    
  }
};
