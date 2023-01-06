    import { IconContext } from "react-icons";
import { useIntersection } from "../../customHooks/useIntersection";
import './styles.css';
export default function BigIconTitleDescriptionRow({img, subtitle, description, style, shadowyBorderBox}){
    
    const [isIntersecting, ref] = useIntersection();

    return(
        <section ref={ref} className={style + " inner-section fix-mobile-flex-direction"}>
            <div className="inner-column left description-column">                
                {isIntersecting ? (
                    <>
                        <h2 className="animate-left-column text-to-left">{subtitle}</h2>
                        <p className="animate-left-column">{description}</p>
                    </>
                ) : null}                
            </div>

            <div className="inner-column right mockup img-column">
                {isIntersecting ? (
                    <div className="animate-right-column">
                        <IconContext.Provider value={{ color: "#6ec1e4", className:'icon-sizer-125'}}>
                            {img}
                        </IconContext.Provider>
                    </div>
                ) : null}
            </div>
        </section>
    )



    // if (style === 'left-text-right-img'){
    //     return(
    //         <section ref={ref} className="inner-section fix-mobile-flex-direction">
    //             <div className="inner-column left description-column">                
    //                 {isIntersecting ? (
    //                     <>
    //                         <h2 className="animate-left-column text-to-left">{subtitle}</h2>
    //                         <p className="animate-left-column">{description}</p>
    //                     </>
    //                 ) : null}                
    //             </div>

    //             <div className="inner-column right mockup img-column">
    //                 {isIntersecting ? (
    //                     <div className="animate-right-column">
    //                         <IconContext.Provider value={{ color: "#6ec1e4", className:'icon-sizer-125'}}>
    //                             {img}
    //                         </IconContext.Provider>
    //                     </div>
    //                 ) : null}
    //             </div>
    //         </section>
    //     )
    // } else if(style === 'right-text-left-img'){
    //     return(
    //         <section className="inner-section">
    //             <div ref={ref} class="inner-column left mockup img-column">
    //                 {isIntersecting ? (
    //                     <div className="animate-left-column">
    //                         <div className={shadowyBorderBox ? 'shadowyBorderBox' : 'mockup-img'}>
    //                         <IconContext.Provider value={{ color: "#6ec1e4", className:'icon-sizer-125' }}>
    //                             {img}
    //                         </IconContext.Provider>
    //                         </div>
    //                     </div>
    //                 ) : null}
    //             </div>
    //             <div class="inner-column right description-column">
    //                 {isIntersecting ? (
    //                     <div className="animate-right-column">
    //                         <h2 className="text-to-left">{subtitle}</h2>
    //                         <p>{description}</p>
    //                     </div>
    //                 ) : null}  
    //             </div>
    //         </section>
    //     )
    // } else {
    //     return(<h1>Error - Use 'left-text-right-img' or 'right-text-left-img' as the proper style attributes in the 'ImgTitleDescriptionSection' component.</h1>)
    // }

}