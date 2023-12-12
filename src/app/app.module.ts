import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { SettingService } from './services/setting.service';
import { HttpService } from './services/http.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SignupEffect } from './store/user/signup.effect';
import { APP_STATE } from './store/app.store';
import { UserService } from './services/user/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

function load(http: HttpClient, service: SettingService) {
  return service.init();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    StoreModule.forRoot(APP_STATE),
    EffectsModule.forRoot([SignupEffect]),
  ],
  providers: [
    SettingService,
    HttpService,
    UserService,
    {
      provide: APP_INITIALIZER,
      useFactory: load,
      deps: [HttpClient, SettingService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
