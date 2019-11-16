import React, { Component } from 'react';
import styled from 'styled-components';

import DatePicker from 'react-datepicker';

import { TextInput } from '../..';
import 'react-datepicker/dist/react-datepicker.css';

const StyledContainer = styled.div`
  .react-datepicker {
    box-shadow: 0px 4px 24px -6px rgba(22, 72, 129, 0.2);
    border: 1px solid ${({ theme: { colors } }) => colors.tertiary10};
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__triangle {
    display: none;
  }

  react-datepicker__day--today,
  react-datepicker__day--keyboard-selected,
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__day--selected {
    color: ${({ theme: { colors } }) => colors.white};
    background-color: ${({ theme: { colors } }) => colors.primary};

    &:hover {
      color: ${({ theme: { colors } }) => colors.white};
      background-color: ${({ theme: { colors } }) => colors.primary};
    }
  }

  .react-datepicker__header {
    background-color: ${({ theme: { colors } }) => colors.primary};
  }
  .react-datepicker__day-name {
    color: ${({ theme: { colors } }) => colors.white};
  }
  .react-datepicker__current-month {
    color: ${({ theme: { colors } }) => colors.white};
  }

  .react-datepicker__navigation {
    outline: none;
  }

  .react-datepicker__navigation--next {
    border-left-color: ${({ theme: { colors } }) => colors.white};

    &:hover {
      border-left-color: ${({ theme: { colors } }) => colors.white};
    }
  }
  .react-datepicker__navigation--previous {
    border-right-color: ${({ theme: { colors } }) => colors.white};

    &:hover {
      border-right-color: ${({ theme: { colors } }) => colors.white};
    }
  }
`;

export interface DateInputPropsType {
  ref?: any;
  value?: Date;
  isValid?: boolean;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  minDate?: Date | null;
  onBlur?: (value: Date | null) => void;
  onFocus?: (value: Date | null) => void;
  onChange?: (value: Date | null) => void;
}
interface StateType {
  active: boolean;
  value: Date | null;
}
export class DateInput extends Component<DateInputPropsType, StateType> {
  public state = { value: null, active: false };

  public componentDidMount() {
    if (this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  public setValue = (value: Date): void => {
    this.setState({ value });
  };

  public getValue = (): Date | null => {
    return this.state.value;
  };

  public onChange = (value: Date) => {
    if (this.props.disabled) {
      return;
    }

    this.setState({ value });
    this.props.onChange && this.props.onChange(value);
  };

  public onBlur = () => {
    this.setState({ active: false });
    this.props.onBlur && this.props.onBlur(this.getValue());
  };

  public onFocus = () => {
    this.setState({ active: true });
    this.props.onFocus && this.props.onFocus(this.getValue());
  };

  public render() {
    return (
      <StyledContainer className={this.props.className}>
        <DatePicker
          strictParsing
          dateFormat="dd-MM-yyyy"
          onChange={this.onChange}
          selected={this.state.value}
          customInput={<TextInput isValid={this.props.isValid} />}
          minDate={this.props.minDate}
          placeholderText={this.props.placeholder}
        />
      </StyledContainer>
    );
  }
}
export default DateInput;
