import React from "react";
import {FormReservation} from "./form";



export const SectionForm: React.FC<{ }> = ( ) => {
    return (
        <section style={{backgroundImage: `url(./images/backgrounds/background-form.svg)`}} className='section-form'>
            <FormReservation />
        </section>
    )
}