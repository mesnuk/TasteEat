export interface  MenuCardProps {
    "name" : string,
    "description" : string,
    "imageSrc" : string,
    "price" : string,
    "type" : string
}
export type MenuTypes = 'Starters' | "Desert" | "Main Dish";

export interface SortingByType {
    arr: MenuCardProps[],
    types : MenuTypes
}