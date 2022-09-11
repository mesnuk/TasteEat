import React from "react";

import { MenuCard } from "./menu-card";
import {MenuCardProps, MenuTypes, SortingByType} from "./type";

class DataMenu {
    menuCards : MenuCardProps[];

    constructor(menuCards : MenuCardProps[]) {
        this.menuCards = menuCards;
    }

    public getStarterSide () : JSX.Element{
         return (
            <div className='starters menu-type'>
                <h1 className='type-heading-menu'>{'Starters'}</h1>
                {
                    this.menuCards.filter((el) => el.type === 'Starters')
                    .map(el => <MenuCard name={el.name}
                                         description={el.description}
                                         imageSrc={el.imageSrc}
                                         price={el.price}
                                         type={el.type} />)

                }
            </div>
         )
    }

    public getDesertSide () : JSX.Element{
        return (
            <div className='desert menu-type'>
                <h1 className='type-heading-menu'>{'Desert'}</h1>
                {this.menuCards.filter((el) => el.type === 'Desert')
                    .map(el => <MenuCard name={el.name}
                                         description={el.description}
                                         imageSrc={el.imageSrc}
                                         price={el.price}
                                         type={el.type} />)

                }
            </div>
        )
    }
    public getMainDishSide () : JSX.Element{
        return (
            <div className='mainDish menu-type'>
                <h1 className='type-heading-menu'>{'Main Dish'}</h1>
                {this.menuCards.filter((el) => el.type === 'Main Dish')
                    .map(el => <MenuCard name={el.name}
                                         description={el.description}
                                         imageSrc={el.imageSrc}
                                         price={el.price}
                                         type={el.type} />)

                }
            </div>
        )
    }
}





export const MenuSide : React.FC<{ arr : MenuCardProps[] }> = ({ arr }) => {
    const menu = new DataMenu(arr);
    const starterSide = menu.getStarterSide();
    const mainDishSide =menu.getMainDishSide();
    const desertSide = menu.getDesertSide();



    
    return (
        <div className='menu-side'>
            {
                starterSide
            }
            {
                mainDishSide
            }
            {
                desertSide
            }
        </div>
    )
}



