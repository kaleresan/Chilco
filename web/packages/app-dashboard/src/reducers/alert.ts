import { Action } from '../actions';
import { CLOSE_ALERT, SHOW_ALERT } from '../actions/alert';

export interface AlertType {
  show: boolean;
  headline: string;
  description: string;
  onError: () => void;
  onSubmit: () => void;
}
export const initialState: AlertType = {
  show: false,
  headline: '',
  description: '',
  onError: () => {},
  onSubmit: () => {}
};
export function alertReducer(state = initialState, action: Action = {}) {
  switch (action.type) {
    case SHOW_ALERT:
      const { headline, description, onError, onSubmit } = action.payload;
      return {
        show: true,
        onError,
        onSubmit,
        headline,
        description
      };
    case CLOSE_ALERT:
      return initialState;
    default:
      return state;
  }
}
export default alertReducer;
