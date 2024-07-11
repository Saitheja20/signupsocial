// import { SocialAuthService, FacebookLoginProvider } from '@abacritt/angularx-social-login';
// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';
// import { FormsModule } from '@angular/forms';
// import Swal from 'sweetalert2';
// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-signup',
//   standalone: true,
//   imports: [FormsModule,CommonModule ],
//   templateUrl: './signup.component.html',
//   styleUrl: './signup.component.css'
// })
// export class SignupComponent {
// signInWithFB() {
// throw new Error('Method not implemented.');
// }
//   onload:any;
//   uniquecode:string="";
//   param="";
//   enteredCaptcha=""
// ngOnInit(){
//   // onload="generate()";
//   let captcha: HTMLElement | null;
//   this.genarateCaptcha();
// console.log("the unique code is "+this.uniquecode);

// }

// genarateCaptcha(){
//   // this.enteredC=this.enteredCaptcha;

//   this.uniquecode="";
//   const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   // this.uniquecode+=param;
//   for (let i = 1; i <=6; i++) {

//             this.uniquecode += randomchar.charAt(Math.random() * randomchar.length);
//         }
//         console.log("the unique characters is "+this.enteredCaptcha);

// }
// onSubmit(){
// this.param=this.enteredCaptcha;
// console.log(this.param);
// alert(this.param);
// // }
// uniquecode: string = '';
//   enteredCaptcha: string = '';
//   username="";
//   email="";
//   password="";
//   repassword="";

//   user:any;
//   loggedIn:any;

//     // Facebook login code
//     constructor(private authService: SocialAuthService) { }

//     signInWithFB(): void {
//       this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
//     }

//     signOut(): void {
//       this.authService.signOut();
//     }
//   ngOnInit() {
//     this.genarateCaptcha();
//     console.log("The unique code is " + this.uniquecode);
//     this.authService.authState.subscribe((user) => {
//       this.user = user;
//       console.log(this.user);
//       this.loggedIn = (user != null);
//     });
//   }

//   genarateCaptcha() {
//     this.uniquecode = '';
//     const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     for (let i = 1; i <= 6; i++) {
//       this.uniquecode += randomchar.charAt(Math.floor(Math.random() * randomchar.length));
//     }
//     console.log("The unique characters are " + this.uniquecode);
//   }

//   onSubmit() {
//     if(this.password===this.repassword){
//         if(this.uniquecode===this.enteredCaptcha){
//           console.log(this.enteredCaptcha+"\n emial: "+this.email+"\n username: "+this.username+"\n password:"+this.password+" \n repassword: "+this.repassword+"\n captcha: "+this.enteredCaptcha+"\n generated captcha:"+this.uniquecode);
//           alert("\n emial: "+this.email+"\n username: "+this.username+"\n password:"+this.password+" \n repassword: "+this.repassword+"\n captcha: "+this.enteredCaptcha+"\n generated captcha:"+this.uniquecode);

//         }else{
//       Swal.fire({
//         // position: 'top-end',
//          icon: 'error',
//          title: 'Wrong Captcha Try Again.',
//          showConfirmButton: false,
//          timer: 2500
//        });
//     }


//     }else{
//       Swal.fire({
//         // position: 'top-end',
//          icon: 'error',
//          title: 'please enter password and conform password as same.',
//          showConfirmButton: false,
//          timer: 2500
//        });
//     }
//      }
// }



// import { SocialAuthService, FacebookLoginProvider } from '@abacritt/angularx-social-login';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import Swal from 'sweetalert2';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-signup',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent {
//   uniquecode: string = '';
//   enteredCaptcha: string = '';
//   username = '';
//   email = '';
//   password = '';
//   repassword = '';

//   user: any;
//   loggedIn: any;

//   constructor(private authService: SocialAuthService) { }

//   ngOnInit() {
//     this.genarateCaptcha();
//     console.log("The unique code is " + this.uniquecode);
//     this.authService.authState.subscribe((user) => {
//       this.user = user;
//       console.log(this.user);
//       this.loggedIn = (user != null);
//     });
//   }

//   signInWithFB(): void {
//     this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
//   }

//   signOut(): void {
//     this.authService.signOut();
//   }

//   genarateCaptcha() {
//     this.uniquecode = '';
//     const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     for (let i = 1; i <= 6; i++) {
//       this.uniquecode += randomchar.charAt(Math.floor(Math.random() * randomchar.length));
//     }
//     console.log("The unique characters are " + this.uniquecode);
//   }

//   onSubmit() {
//     if (this.password === this.repassword) {
//       if (this.uniquecode === this.enteredCaptcha) {
//         console.log(
//           "Entered Captcha: " + this.enteredCaptcha +
//           "\nEmail: " + this.email +
//           "\nUsername: " + this.username +
//           "\nPassword: " + this.password +
//           "\nRepassword: " + this.repassword +
//           "\nCaptcha: " + this.enteredCaptcha +
//           "\nGenerated Captcha: " + this.uniquecode
//         );
//         alert(
//           "Email: " + this.email +
//           "\nUsername: " + this.username +
//           "\nPassword: " + this.password +
//           "\nRepassword: " + this.repassword +
//           "\nCaptcha: " + this.enteredCaptcha +
//           "\nGenerated Captcha: " + this.uniquecode
//         );
//       } else {
//         Swal.fire({
//           icon: 'error',
//           title: 'Wrong Captcha, Try Again.',
//           showConfirmButton: false,
//           timer: 2500
//         });
//       }
//     } else {
//       Swal.fire({
//         icon: 'error',
//         title: 'Please enter the same password and confirm password.',
//         showConfirmButton: false,
//         timer: 2500
//       });
//     }
//   }
// }


// import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import Swal from 'sweetalert2';/ import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SocialAuthService, FacebookLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-signup',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  uniquecode: string = '';
  enteredCaptcha: string = '';
  username = '';
  email = '';
  password = '';
  repassword = '';

  user: any;
  loggedIn: any;

  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.genarateCaptcha();
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    const config: SocialAuthServiceConfig = {
      autoLogin: false,
      providers: [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('your-facebook-app-id')
        }
      ]
    };
    // this.authService.initialize(config);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user => {
      // Handle successful login
      console.log(user);
    })
    .catch(err => {
      // Handle error
      console.error(err);
    });;
  }

  signOut(): void {
    this.authService.signOut().then(() => {
      // Handle successful logout
    })
    .catch(err => {
      // Handle error
      console.error(err);
    });;
  }

  genarateCaptcha() {
    this.uniquecode = '';
    const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 1; i <= 6; i++) {
      this.uniquecode += randomchar.charAt(Math.floor(Math.random() * randomchar.length));
    }
    console.log("The unique characters are " + this.uniquecode);
  }

  onSubmit() {
    if (this.password === this.repassword) {
      if (this.uniquecode === this.enteredCaptcha) {
        console.log(
          "Entered Captcha: " + this.enteredCaptcha +
          "\nEmail: " + this.email +
          "\nUsername: " + this.username +
          "\nPassword: " + this.password +
          "\nRepassword: " + this.repassword +
          "\nCaptcha: " + this.enteredCaptcha +
          "\nGenerated Captcha: " + this.uniquecode
        );
        alert(
          "Email: " + this.email +
          "\nUsername: " + this.username +
          "\nPassword: " + this.password +
          "\nRepassword: " + this.repassword +
          "\nCaptcha: " + this.enteredCaptcha +
          "\nGenerated Captcha: " + this.uniquecode
        );
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Wrong Captcha, Try Again.',
          showConfirmButton: false,
          timer: 2500
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Please enter the same password and confirm password.',
        showConfirmButton: false,
        timer: 2500
      });
    }
  }
}
