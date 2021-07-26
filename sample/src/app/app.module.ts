import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, provideAuth, FirestoreModule } from '@angular/fire';
import { initializeApp, getApp } from 'firebase/app';
import { initializeAuth, getAuth } from '@firebase/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FunctionsModule  } from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirebaseApp(() => {
      const app = initializeApp(environment.firebase, 'second');
      app.automaticDataCollectionEnabled = false;
      return app;
    }),
    provideAuth(() => getAuth()),
    provideAuth(() => {
      const auth = initializeAuth(getApp('second'));
      auth.useDeviceLanguage();
      return auth;
    }),
    FunctionsModule,
    FirestoreModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
