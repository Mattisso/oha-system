import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../messages/message.service';
import { AuthService} from '../_services/auth.service';
import { IUser } from '../../models/user';
// import { MessageService } from '../_services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  pageTitle = 'Log In';
  users: IUser[];
  returnUrl: string;
  loading = false;


  constructor(private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService) { }

  loginForm: FormGroup;
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  ngOnInit() {

    if (this.authService.loggedIn) {
      this.router.navigate(['/']);
    }
    this.loginForm = this.formBuilder.group({
      username: this.username,
      password: this.password
    });

  }
  setClassEmail() {
    return { 'has-danger': !this.username.pristine && !this.username.valid };
  }

  setClassPassword() {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }



  login() {
    this.loading = true;
    this.authService.login(this.loginForm.value)
      .subscribe(data => {
          this.router.navigate(['/']);
        },
        error => {
          this.messageService.error('invalid username  or password!');
          this.loading = false;
        });
  }

}
