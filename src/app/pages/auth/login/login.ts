import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/auth/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.html',
    standalone: false,
    styleUrl: './login.sass'
})
export class Login implements OnInit {

    loginForm: FormGroup = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
    });

    constructor(private authService: AuthService,
                private formBuilder: FormBuilder,
                private router: Router) {
    }

    ngOnInit(): void {
        this.initLoginForm();
    }

    private initLoginForm() {
        this.loginForm = this.formBuilder.group({
            email: ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(255),
                Validators.pattern(/^[a-zA-Z\d][' !#$%&'*+\-/=?^_`{|}~\w.-]{0,}@[\w.-]{1,}\.[a-zA-Z]{2,4}$/)
            ]],
            password: ['', [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(64)
            ]]
        });
    }

    login() {
        this.authService.login(this.loginForm.value).subscribe(response => {
            this.router.navigateByUrl('/users');
        });
    }

}
