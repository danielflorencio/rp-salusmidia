// import React from "react";
import './component-styles.css'

export default function IconAndDescriptionBlock({title, src, description}){
    return(
        <div class="block">
            <div class="center">
                <img class="icon" alt="icon" src={src}/>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}