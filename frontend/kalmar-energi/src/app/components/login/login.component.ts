import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

/**
 * Components that display a login form and handles it logic.
 *
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      customerNumber: ''
    });
  }

  ngOnInit(): void {
  }

  /**
   * Tries to login the customer using the entered login data.
   *
   * TODO: Handle !success in if-statement. Display en error message
   * if custom could not be logged in.
   *
   * @param formValue form data received from login form in component.
   */
  tryLogin(formValue) {
    this.authService.login(formValue.customerNumber)
      .subscribe(success => {
        if (success) {
          this.router.navigate(['/dashboard']);
        }
      });
  }

}
