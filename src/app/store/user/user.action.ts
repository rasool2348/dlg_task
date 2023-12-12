import { createAction, props } from '@ngrx/store';
import { Loading } from 'src/app/models/loading';
import { Response } from '../../models/signupResponse';
import { User } from 'src/app/models/user';

export const signupUser = createAction('SIGNUP_USER', props<User>());
export const loginSuccess = createAction('LOGIN_SUCCESS', props<Response>());
export const setLoading = createAction('SET_LOADING', props<Loading>());
