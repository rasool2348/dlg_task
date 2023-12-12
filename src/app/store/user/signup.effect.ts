import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginSuccess, setLoading, signupUser } from './user.action';
import { exhaustMap, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { Loading } from 'src/app/models/loading';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user';

@Injectable()
export class SignupEffect {
  constructor(
    private _actions$: Actions,
    private _userService: UserService,
    private _store: Store<Loading>
  ) {}

  signupUser$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(signupUser),
      exhaustMap((action) => {
        this._store.dispatch(setLoading(new Loading(true)));
        return this._userService
          .signupUser(new User(action.firstName, action.lastName, action.email))
          .pipe(
            map((res) => {
              this._store.dispatch(setLoading(new Loading(false)));
              return loginSuccess(res);
            })
          );
      })
    );
  });
}
