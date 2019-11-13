import React, { Component } from 'react';

import styled from 'styled-components';

const StyledInput: any = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 16px;
  position: relative;
  font-family: 'Work Sans', sans-serif;
  background: ${({ theme: { colors } }) => colors.white};
`;

const StyledContainer: any = styled.div`
  height: 40px;
  display: flex;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  box-shadow: 0px 4px 24px -6px rgba(22, 72, 129, 0.2);
  border: 1px solid ${({ theme: { colors } }) => colors.tertiary10};
  border-bottom: 1px solid
    ${({ theme: { colors }, isValid }: any) =>
      isValid ? colors.tertiary10 : colors.warning};

  &::after {
    left: 0px;
    content: '';
    height: 2px;
    bottom: 0px;
    position: absolute;
    box-sizing: border-box;
    transition: width 75ms;
    width: ${({ active, isValid }: any) => (active || !isValid ? 100 : 0)}%;
    background-color: ${({ isValid, color, theme: { colors } }: any) =>
      isValid ? (color ? color : colors.main) : colors.warning};
  }
`;

export interface TextInputPropsType {
  ref?: any;
  active?: true;
  color?: string;
  value?: string;
  isValid?: boolean;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  placeholder?: string;
  type?: 'text' | 'password';
  useExternalState?: boolean;
  onBlur?: (value: string) => void;
  onFocus?: (value: string) => void;
  onChange?: (value: string) => void;
}
export interface TextInputStateType {
  value: string;
  active: boolean;
}
export class TextInput extends Component<
  TextInputPropsType,
  TextInputStateType
> {
  private input: any;
  public state = { value: '', active: false };

  public componentDidMount() {
    if (this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  public componentDidUpdate(prevProps: TextInputPropsType): void {
    if (
      this.props.value &&
      this.state.value !== this.props.value &&
      prevProps.value !== this.props.value
    ) {
      this.setValue(this.props.value);
      return;
    }
  }

  public setValue = (value: string): void => {
    this.setState({ value });
  };

  public getValue = (): string => {
    return this.state.value;
  };

  public onChange = (event: { target: { value: string } }) => {
    if (this.props.disabled || !event.target) {
      return;
    }

    this.setState({ value: event.target.value });
  };

  public onBlur = () => {
    this.setState({ active: false });
    this.props.onBlur && this.props.onBlur(this.state.value);
  };
  public onFocus = () => {
    this.setState({ active: true });
    this.props.onFocus && this.props.onFocus(this.state.value);
  };

  public onKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.input && this.input.blur();
    }
  };

  public render() {
    const {
      type,
      value,
      color,
      active,
      required,
      disabled,
      onChange,
      className,
      placeholder,
      isValid = true,
      useExternalState
    } = this.props;

    return (
      <StyledContainer
        color={color}
        isValid={isValid}
        className={className}
        active={active ? true : this.state.active}
      >
        <StyledInput
          isValid={isValid}
          required={required}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          placeholder={placeholder}
          type={type ? type : 'text'}
          onKeyPress={this.onKeyPress}
          ref={(input: any) => (this.input = input)}
          value={useExternalState ? value : this.state.value}
          onChange={onChange && !disabled ? onChange : this.onChange}
        />
      </StyledContainer>
    );
  }
}
