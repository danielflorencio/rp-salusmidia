import './styles.css'
export default function ImgTitleDescriptionRow({img, subtitle, description, style, shadowyBorderBox}){
    if (style === 'left-text-right-img'){
        return(
            <div class="inner-section">
                <div class="inner-column left">
                    <h2 className="text-to-left">{subtitle}</h2>
                    <p>{description}</p>
                </div>
                <div class="inner-column right mockup">
                    <div className={shadowyBorderBox ? 'shadowyBorderBox' : 'mockup-img'}>
                        <img className='mockup' src={img} alt="mockup"/>
                    </div>
                </div>
            </div>
        )
    } else if(style === 'right-text-left-img'){
        return(
            <div class="inner-section">
                <div class="inner-column left mockup">
                    <div className={shadowyBorderBox ? 'shadowyBorderBox' : 'mockup-img'}>
                        <img className='mockup' src={img} alt="mockup"/>
                    </div>
                </div>
                <div class="inner-column right justify-center">
                    <h2 className="text-to-left">{subtitle}</h2>
                    <p>{description}</p>
                </div>
            </div>
        )
    } else {
        return(<h1>Error - Use 'left-text-right-img' or 'right-text-left-img' as the proper style attributes in the 'ImgTitleDescriptionSection' component.</h1>)
    }
}