import { connect } from 'react-redux';

import { StateType } from '../reducers';

export type modalType = '';

interface PropsType {
  activeModal: modalType | null;
}
export function ModalsComponent({ activeModal }: PropsType) {
  switch (activeModal) {
    default:
      return null;
  }
}
export const Modals = connect((state: StateType) => ({
  activeModal: state.modal.activeModal
}))(ModalsComponent);
export default Modals;
