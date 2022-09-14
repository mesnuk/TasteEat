export interface DiscountDishProps {
    name: string;
    description :string;
    price : number;
    discount : number;
    imageSrc : string;
    bgMainSrc : string;
    bgPriceSrc : string;
}

interface PopularDishCardProps {
    name : string;
    price : number;
    description : string;
    imageSrc : string;
}