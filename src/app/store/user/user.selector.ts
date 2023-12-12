import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Loading } from 'src/app/models/loading';
import { STATES } from './user.state';

const loadingStatus = createFeatureSelector<Loading>(STATES.USER);

export const getLoadingStatus = createSelector(loadingStatus, (state) => {
  return state.loading;
});
