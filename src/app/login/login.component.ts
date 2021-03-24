import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean;

  constructor(private fb: FormBuilder,
    private router: Router,) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    } else {
      this.router.navigate(['/add']);
    }
  }

  /**
   * Get FormGroup controls instance
   *
   * @param formGroupName : formGroupName
   * @param formControlName : formControlName
   */
   getFormGroupControls(
    formGroupName: string,
    formControlName: string
  ): AbstractControl {
      return this.loginForm.controls[formControlName];
  }

}
