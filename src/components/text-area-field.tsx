import React, {
  CSSProperties,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { baseTextFieldElement, IBaseProps } from './text-field-base';

const TextArea = styled.textarea`
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  max-width: 100%;
  min-width: 100%;
  resize: none;
`;

type ITextAreaField = IBaseProps<any> &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextFiledElement = baseTextFieldElement<
  HTMLTextAreaElement,
  ITextAreaField
>();

export const TextAreaField: React.FC<ITextAreaField> = ({
  style,
  ...props
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [fieldStyle, setFieldStyle] = useState<CSSProperties | null>(
    style || null
  );

  useEffect(() => {
    const area = textAreaRef?.current;
    if (!area) {
      return;
    }
    const resize = () => {
      area.style.height = 'auto';
      area.style.height = area.scrollHeight + 'px';
      setFieldStyle({ ...fieldStyle, height: area.scrollHeight + 'px' });
    };
    resize();
    console.log('111111');

    const delayedResize = () => {
      window.setTimeout(resize, 0);
    };

    area.addEventListener('change', resize);
    area.addEventListener('cut', delayedResize);
    area.addEventListener('paste', delayedResize);
    area.addEventListener('drop', delayedResize);
    area.addEventListener('keydown', delayedResize);

    return () => {
      area.removeEventListener('change', resize);
      area.removeEventListener('cut', delayedResize);
      area.removeEventListener('paste', delayedResize);
      area.removeEventListener('drop', delayedResize);
      area.removeEventListener('keydown', delayedResize);
    };
  }, [textAreaRef]);

  return (
    <TextFiledElement
      {...props}
      style={{ minHeight: '75px', height: 'auto', ...fieldStyle }}
      ref={textAreaRef}
      inputElement={({ isDisabled, value, style, ...other }, ref) => {
        return (
          <TextArea
            {...other}
            style={{ minHeight: '75px', ...style }}
            disabled={isDisabled}
            value={value}
            ref={ref}
          />
        );
      }}
    />
  );
};
