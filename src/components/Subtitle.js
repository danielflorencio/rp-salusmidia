import React from "react";
import './component-styles.css'



export default function SubTitle({subtitle, color, background_color}){
    const colorClass = 'color-' + color
    const backgroundClass = 'background-color-' + background_color
    const classes = colorClass + ' ' + backgroundClass + ' '
    console.log(classes)
    return(
        <>
            <h3 className={classes + 'center'}>{subtitle}</h3>
        </>
    )
}