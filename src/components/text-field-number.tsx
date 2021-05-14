import React, { InputHTMLAttributes } from 'react';
import NumberFormat, {
  FormatInputValueFunction,
  NumberFormatValues,
} from 'react-number-format';
import { baseTextFieldElement, IBaseProps } from './text-field-base';

// copy from react-number-format
interface INumberFormatProps extends InputHTMLAttributes<HTMLInputElement> {
  thousandSeparator?: boolean | string;
  decimalSeparator?: string;
  thousandsGroupStyle?: 'thousand' | 'lakh' | 'wan';
  decimalScale?: number;
  fixedDecimalScale?: boolean;
  displayType?: 'input' | 'text';
  prefix?: string;
  suffix?: string;
  format?: string | FormatInputValueFunction;
  removeFormatting?: (formattedValue: string) => string;
  mask?: string | string[];
  defaultValue?: number | string;
  isNumericString?: boolean;
  customInput?: React.ComponentType<any>;
  allowNegative?: boolean;
  allowEmptyFormatting?: boolean;
  allowLeadingZeros?: boolean;
  onValueChange?: (values: NumberFormatValues) => void;
  /**
   * these are already included in React.HTMLAttributes<HTMLInputElement>
   * onKeyDown: Function;
   * onMouseUp: Function;
   * onChange: Function;
   * onFocus: Function;
   * onBlur: Function;
   */
  type?: 'text' | 'tel' | 'password';
  isAllowed?: (values: NumberFormatValues) => boolean;
  renderText?: (formattedValue: string) => React.ReactNode;
  getInputRef?: ((el: HTMLInputElement) => void) | React.Ref<any>;
  allowedDecimalSeparators?: Array<string>;
}

type IProps = INumberFormatProps & IBaseProps<INumberFormatProps>;

const TextFiledElement = baseTextFieldElement<HTMLInputElement, IProps>();

export const TextFieldNumber: React.FC<IProps> = (props) => {
  const {
    decimalScale = 2,
    thousandSeparator = ' ',
    decimalSeparator = ',',
    onValueChange,
    ...mainProps
  } = props;

  return (
    <TextFiledElement
      {...mainProps}
      inputElement={({ isDisabled, value, ...other }, ref) => {
        return (
          <NumberFormat
            {...other}
            isNumericString
            ref={ref}
            disabled={isDisabled}
            value={value}
            decimalScale={decimalScale}
            decimalSeparator={decimalSeparator}
            thousandSeparator={thousandSeparator}
            onValueChange={onValueChange}
          />
        );
      }}
    />
  );
};
