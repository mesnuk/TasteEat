import React from "react";
import {MenuSide} from "./menu-side";
import {MenuCardProps} from "./type";
import {MenuAdvertising} from "./menu-advertising";


export const SectionMenu: React.FC<{ menuCards : MenuCardProps[] }> = ( {menuCards} ) => {
    return (
        <section className='section-menu'>
            <MenuAdvertising  />
            <MenuSide arr={menuCards}/>
        </section>
    )
}