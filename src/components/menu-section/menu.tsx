import React from "react";
import {MenuSide} from "./menu-side";
import {MenuCardProps} from "./type";


export const SectionMenu: React.FC<{ menuCards : MenuCardProps[] }> = ( {menuCards} ) => {
    return (
        <section className='section-menu'>
            <MenuSide arr={menuCards}/>
        </section>
    )
}