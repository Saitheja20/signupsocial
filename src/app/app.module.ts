// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { SocialLoginModule , SocialAuthServiceConfig} from '@abacritt/angularx-social-login';

// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { AppComponent } from './app.component';
// import {
//   GoogleLoginProvider,
//   FacebookLoginProvider
// } from '@abacritt/angularx-social-login';

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,
//     SocialLoginModule
//   ],
//   providers:[ {
//     provide: 'SocialAuthServiceConfig',
//     useValue: {
//       autoLogin: false,
//       lang: 'en',
//       providers: [
//         {
//           id: GoogleLoginProvider.PROVIDER_ID,
//           provider: new GoogleLoginProvider(
//             '352852303198-atu7n4unhc3i28dv31oo8hmson5pn7eu.apps.googleusercontent.com'
//           )
//         },
//         {
//           id: FacebookLoginProvider.PROVIDER_ID,
//           provider: new FacebookLoginProvider('507506088370092')
//         }
//       ],
//       onError: (err) => {
//         console.error(err);
//       }
//     } as SocialAuthServiceConfig,
//   }],
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SocialLoginModule, SocialAuthServiceConfig, SocialAuthService } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    AppComponent,
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    SocialLoginModule,

  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '352852303198-atu7n4unhc3i28dv31oo8hmson5pn7eu.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('507506088370092')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    SocialAuthService
  ],
  // bootstrap: [AppComponent]
})
export class AppModule { }
