import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignupComponent } from "./auth/signup/signup.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'authenticationapp';
}
