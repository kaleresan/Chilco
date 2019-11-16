import React from 'react';
import { Alert } from '@chilco/common-ui';
import { useDispatch, useSelector } from 'react-redux';

import { StateType } from '../reducers';
import { closeAlert } from '../actions/alert';
import { injectIntl, IntlShape } from 'react-intl';

interface PropsType {
  intl: IntlShape;
}
export function AlertsComponent({ intl }: PropsType) {
  const msg = (id: string) => intl.formatMessage({ id });
  const dispatch = useDispatch();
  const { show, headline, description, onSubmit, onError } = useSelector(
    (state: StateType) => state.alert
  );

  if (!show) {
    return null;
  }

  return (
    <Alert
      onError={onError}
      onSubmit={onSubmit}
      headline={headline}
      description={description}
      cancelText={msg('Alert.Cancel')}
      submitText={msg('Alert.Submit')}
      onClose={() => dispatch(closeAlert())}
    />
  );
}
export const Alerts = injectIntl(AlertsComponent);
