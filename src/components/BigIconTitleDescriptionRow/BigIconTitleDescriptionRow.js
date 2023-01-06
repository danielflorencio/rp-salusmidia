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
}