import { IconContext } from "react-icons";
import './component-styles.css';



export default function BigIconTitleDescriptionMicroSection({img, subtitle, description, style, shadowyBorderBox}){
    if (style === 'left-text-right-img'){
        return(
            <div class="inner-section">
                <div class="inner-column left">
                    <h2 className="text-to-left">{subtitle}</h2>
                    <p>{description}</p>
                </div>
                <div class="inner-column right mockup">
                    <div className={shadowyBorderBox ? 'shadowyBorderBox' : 'mockup-img'}>
                    <IconContext.Provider value={{ color: "#6ec1e4", className:'icon-sizer-125'}}>
                        {img}
                    </IconContext.Provider>
                    </div>
                </div>
            </div>
        )
    } else if(style === 'right-text-left-img'){
        return(
            <div class="inner-section">
                <div class="inner-column left mockup">
                    <div className={shadowyBorderBox ? 'shadowyBorderBox' : 'mockup-img'}>
                    <IconContext.Provider value={{ color: "#6ec1e4", className:'icon-sizer-125' }}>
                        {img}
                    </IconContext.Provider>
                    </div>
                </div>
                <div class="inner-column right">
                    <h2 className="text-to-left">{subtitle}</h2>
                    <p>{description}</p>
                </div>
            </div>
        )
    } else {
        return(<h1>Error - Use 'left-text-right-img' or 'right-text-left-img' as the proper style attributes in the 'ImgTitleDescriptionSection' component.</h1>)
    }

}