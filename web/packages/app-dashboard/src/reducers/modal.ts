import { Action } from '../actions';
import { modalType } from '../modals';
import { CLOSE_MODAL, SHOW_MODAL } from '../actions/model';

export interface ModalType {
  activeModal: modalType | null;
  params: {
    [key: string]: any;
  };
}
export const initialState: ModalType = {
  params: {},
  activeModal: null
};
export function contactsReducer(state = initialState, action: Action = {}) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        params: action.payload.params,
        activeModal: action.payload.modal
      };
    case CLOSE_MODAL:
      return initialState;
    default:
      return state;
  }
}
export default contactsReducer;
