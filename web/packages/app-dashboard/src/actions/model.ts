export type SHOW_MODAL_TYPE = 'SHOW_MODAL';
export const SHOW_MODAL: SHOW_MODAL_TYPE = 'SHOW_MODAL';
export function showModal(modal: string, params: { [key: string]: any } = {}) {
  return { type: SHOW_MODAL, payload: { modal, params } };
}
export type CLOSE_MODAL_TYPE = 'CLOSE_MODAL';
export const CLOSE_MODAL: CLOSE_MODAL_TYPE = 'CLOSE_MODAL';
export function closeModal() {
  return { type: CLOSE_MODAL };
}
