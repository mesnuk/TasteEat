export interface ButtonInterface {
    innerText: string;
    textColor?: string;
    bgColor ?: string;
    height ?: number;
    width ?: number;
    bgColorHover ?:  string;
    colorHover ?:  string;
    colorBorder ?:  string;
}
export interface LinkInterface extends ButtonInterface{
    href : string;
}