import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EMAIL_PATTERN, NAME_PATTERN } from 'src/app/consts/regexPattern';
import { Loading } from 'src/app/models/loading';
import { User } from 'src/app/models/user';
import { LoaderComponent } from 'src/app/sharedComponents/loader.component';
import { signupUser } from 'src/app/store/user/user.action';
import { getLoadingStatus } from 'src/app/store/user/user.selector';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, LoaderComponent],
})
export class SignupComponent implements OnInit {

  public loadingStatus$!:Observable<boolean>;

  constructor(private _store: Store<Loading>, private _fb: FormBuilder) {}

  userForm = this._fb.group({
    firstName: this._fb.nonNullable.control('', [
      Validators.required,
      Validators.pattern(NAME_PATTERN),
      Validators.maxLength(40),
    ]),
    lastName: this._fb.nonNullable.control('', [
      Validators.required,
      Validators.pattern(NAME_PATTERN),
      Validators.maxLength(40),
    ]),
    email: this._fb.nonNullable.control('', [
      Validators.required,
      Validators.pattern(EMAIL_PATTERN),
    ]),
  });

  ngOnInit(): void {
    this.loadingStatus$ = this._store.select(getLoadingStatus);
  }

  submitForm(userForm: typeof this.userForm) {
    this.userForm.reset();
    this._store.dispatch(signupUser(userForm.value as User));
  }
}
