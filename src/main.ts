import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";

if (environment.production) {
  enableProdMode();
}
Amplify.configure({
  ...aws_exports,
  aws_appsync_graphqlEndpoint: 'https://uy7ekywvabci5jkn4334hdkmey.appsync-api.ap-south-1.amazonaws.com/graphql',
  aws_appsync_apiKey: 'da2-xnr3am3otffghn4dltqhbjldx4',
  aws_appsync_authenticationType: 'API_KEY',
});
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
