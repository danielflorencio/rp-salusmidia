import React from "react";
import './component-styles.css'
export default function CtaButton({cta, color, background_color}){ 
    
    return(
        <>
            <div className={'section' + ' background-color-' + background_color}>
                <input id="btn-1" type="submit" value={cta}/>
            </div>
        </>
    )
}