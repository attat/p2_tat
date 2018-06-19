import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MyComponent } from '../components/foo';
import { SignInPage } from '../pages/sign-in/sign-in';
import { MyIonicInputDirective } from '../directives/my-ionic-input';
import { DisplayPage } from '../pages/display/display';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyComponent,
    SignInPage,
    MyIonicInputDirective,
    DisplayPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MyComponent,
    SignInPage,
    DisplayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
