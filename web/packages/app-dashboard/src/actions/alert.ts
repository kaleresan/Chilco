export type SHOW_ALERT_TYPE = 'SHOW_ALERT';
export const SHOW_ALERT: SHOW_ALERT_TYPE = 'SHOW_ALERT';
export function showAlert(
  headline: string,
  description: string,
  onSubmit: () => void,
  onCancel = () => {}
) {
  return {
    type: SHOW_ALERT,
    payload: { headline, description, onSubmit, onCancel }
  };
}
export type CLOSE_ALERT_TYPE = 'CLOSE_ALERT';
export const CLOSE_ALERT: CLOSE_ALERT_TYPE = 'CLOSE_ALERT';
export function closeAlert() {
  return { type: CLOSE_ALERT };
}
