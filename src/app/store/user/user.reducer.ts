import { createReducer, on } from '@ngrx/store';
import { initialState } from './user.state';
import { setLoading } from './user.action';

const _userReducer = createReducer(
  initialState,
  on(setLoading, (state, action) => {
    return {
      ...state,
      loading: action.loading,
    };
  })
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
