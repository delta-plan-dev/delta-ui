import { CSSProperties } from "react";
declare type Props = {
    title: string;
    handleChange: (value: boolean) => void;
    value: boolean;
    style?: CSSProperties;
};
declare const Switch: ({ title, handleChange, value, style }: Props) => JSX.Element;
export default Switch;
