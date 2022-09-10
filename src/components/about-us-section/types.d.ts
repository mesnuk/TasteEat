export interface CardProps {
    key : number;
    heading: string;
    paragraph: string;
    imageSrc: string;
}

export interface TextBlockProps {
    key : number;
    innerH2 : string;
    innerParagraph : string;
}



export interface JSONCardsProps {
    arr : CardProps[];
}
export interface JSONTextBlockProps {
    arr : TextBlockProps[];
}