import { Loading } from 'src/app/models/loading';

export enum STATES {
  USER = 'user',
}
export const initialState: Loading = {
  loading: false,
};
