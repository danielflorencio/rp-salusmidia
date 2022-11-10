import React from "react";
import './component-styles.css'



export default function Title({title, color, background_color}){
    const colorClass = 'color-' + color
    const backgroundClass = 'background-color-' + background_color
    const classes = colorClass + ' ' + backgroundClass + ' '
    console.log(classes)
    return(
        <>
            <h2 className={classes + 'section-title-h2 center'}>{title}</h2>
        </>
    )
}