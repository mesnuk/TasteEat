import React from "react";
import {MenuSide} from "./menu-side";
import {MenuCardProps} from "./type";
import {MenuAdvertising} from "./menu-advertising";


export const SectionMenu: React.FC<{ menuCards : MenuCardProps[] }> = ( {menuCards} ) => {
    return (
        <section className='section-menu'>
            <div className='menu-section-body'>
                <MenuAdvertising  />
                <MenuSide arr={menuCards}/>
            </div>
        </section>
    )
}