import React from "react";
import './component-styles.css';



export default function ImgTitleDescriptionSection({img, subtitle, description, style}){
    if (style === 'left-text-right-img'){
        return(
            <>
                <div class="inner-section blue">
                    <div class="inner-column left">
                        <h2>{subtitle}</h2>
                        <p>{description}</p>
                    </div>
                    <div class="inner-column right mockup">
                        {/* <img src="imgs/Scrum board-bro.png" alt="mockup"/> */}
                        <img src={img} alt="mockup"/>
                    </div>
                </div>
            </>
        )
    } else if(style === 'right-text-left-img'){
        return(
            <>
                <div class="inner-section red">
                    <div class="inner-column left mockup">
                    <img src={img} alt="mockup"/>
                </div>
                    <div class="inner-column right">
                    <h2>{subtitle}</h2>
                    <p>{description}</p>
                    </div>
                </div>
            </>
        )
    } else {
        return(<h1>Error - Use 'left-text-right-img' or 'right-text-left-img' as the proper style attributes in the 'ImgTitleDescriptionSection' component.</h1>)
    }

    return(
        <>
        <div class="inner-section blue">
            <div class="inner-column left">
                <h2>Google Ads</h2>
                <p>Have you ever wondered why the patient went to your competitor and not you? With the power of Google Ads, you will be found by up to 3x more patients! Be the one who is ahead of the competition.</p>
            </div>
            <div class="inner-column right mockup">
                {/* <img src="imgs/Scrum board-bro.png" alt="mockup"/> */}
                <img src={img} alt="mockup"/>
            </div>
        </div>
        
        </>
    )
}