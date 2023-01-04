import { IconContext } from "react-icons";
import './styles.css';
import { useEffect, useRef, useState } from "react";

export default function BigIconTitleDescriptionRow({img, subtitle, description, style, shadowyBorderBox}){


    // Documentation on how to do this: https://greensock.com/react/ 
    // Documentation on how to animate while using the intersection oberver api https://dev.to/producthackers/intersection-observer-using-react-49ko
    // https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5
    // https://www.npmjs.com/package/react-intersection-observer
    

    const [isVisible, setIsVisible] = useState(false)
    const element = useRef(null);
  
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4
    }
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(entries[0].isIntersecting)
        }
      }, options);
  
      if (element.current) {
        observer.observe(element.current);
      }
  
      return () => {
        observer.unobserve(element.current);
      };
    }, [element, options]);

    if (style === 'left-text-right-img'){
        return(
            <section ref={element} className="inner-section fix-mobile-flex-direction">
                <div className="inner-column left description-column">                
                    {isVisible ? (
                        <>
                            <h2 className="animate-left-column text-to-left">{subtitle}</h2>
                            <p className="animate-left-column">{description}</p>
                        </>
                    ) : null}                
                </div>

                <div className="inner-column right mockup img-column">
                    {isVisible ? (
                        <div className="animate-right-column">
                            <IconContext.Provider value={{ color: "#6ec1e4", className:'icon-sizer-125'}}>
                                {img}
                            </IconContext.Provider>
                        </div>
                    ) : null}
                </div>
            </section>
        )
    } else if(style === 'right-text-left-img'){
        return(
            <section className="inner-section">
                <div ref={element} class="inner-column left mockup img-column">
                    {isVisible ? (
                        <div className="animate-left-column">
                            <div className={shadowyBorderBox ? 'shadowyBorderBox' : 'mockup-img'}>
                            <IconContext.Provider value={{ color: "#6ec1e4", className:'icon-sizer-125' }}>
                                {img}
                            </IconContext.Provider>
                            </div>
                        </div>
                    ) : null}
                </div>
                <div class="inner-column right description-column">
                    {isVisible ? (
                        <div className="animate-right-column">
                            <h2 className="text-to-left">{subtitle}</h2>
                            <p>{description}</p>
                        </div>
                    ) : null}  
                </div>
            </section>
        )
    } else {
        return(<h1>Error - Use 'left-text-right-img' or 'right-text-left-img' as the proper style attributes in the 'ImgTitleDescriptionSection' component.</h1>)
    }

}