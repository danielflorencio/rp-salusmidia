// import React from "react";
import './component-styles.css'



export default function IconAndDescriptionBlock({icon, title, description}){
    return(
        <div class="block">
            <div class="center">
                {/* <img class="icon" alt="icon" src={Icon}/> */}
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}