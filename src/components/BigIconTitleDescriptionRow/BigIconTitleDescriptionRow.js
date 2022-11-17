import { IconContext } from "react-icons";
import './styles.css';
import { useEffect, useRef, useState } from "react";
// import gsap from 'gsap';
// import { useEffect, useRef, useState } from 'react';

export default function BigIconTitleDescriptionRow({img, subtitle, description, style, shadowyBorderBox}){


    // Documentation on how to do this: https://greensock.com/react/ 
    // Documentation on how to animate while using the intersection oberver api https://dev.to/producthackers/intersection-observer-using-react-49ko
    // https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5
    // https://www.npmjs.com/package/react-intersection-observer
    


    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    
    const callBackFunction = (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callBackFunction, options)
        if (containerRef.current) observer.observe(containerRef.current)
        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [containerRef, options])


    if (style === 'left-text-right-img'){
        return(

            <section className="inner-section fix-mobile-flex-direction">
                <div ref={containerRef} class="inner-column left description-column">                
                    {isVisible ? (
                        <>
                            <h2 className="animate-column text-to-left">{subtitle}</h2>
                            <p className="animate-column">{description}</p>
                        </>
                    ) : null}
                    {/* <h2 className="text-to-left">{subtitle}</h2>
                    <p>{description}</p> */}
                
                </div>

                <div class="inner-column right mockup img-column">
                    <div className={shadowyBorderBox ? 'shadowyBorderBox' : 'mockup-img'}>
                    <IconContext.Provider value={{ color: "#6ec1e4", className:'icon-sizer-125'}}>
                        {img}
                    </IconContext.Provider>
                    </div>
                </div>
            



                {/* <div ref={ContainerRef} className="inner-column left description-column"> */}
                {/* <div ref={containerRef} class="inner-column left description-column">                
                    <h2 className="text-to-left">{subtitle}</h2>
                    <p>{description}</p>
                </div>
                <div class="inner-column right mockup img-column">
                    <div className={shadowyBorderBox ? 'shadowyBorderBox' : 'mockup-img'}>
                    <IconContext.Provider value={{ color: "#6ec1e4", className:'icon-sizer-125'}}>
                        {img}
                    </IconContext.Provider>
                    </div>
                </div> */}
            </section>
        )
    } else if(style === 'right-text-left-img'){
        return(
            <section class="inner-section">
                <div class="inner-column left mockup img-column">
                    <div className={shadowyBorderBox ? 'shadowyBorderBox' : 'mockup-img'}>
                    <IconContext.Provider value={{ color: "#6ec1e4", className:'icon-sizer-125' }}>
                        {img}
                    </IconContext.Provider>
                    </div>
                </div>
                <div class="inner-column right description-column">
                    <h2 className="animate-column text-to-left">{subtitle}</h2>
                    <p>{description}</p>
                </div>
            </section>
        )
    } else {
        return(<h1>Error - Use 'left-text-right-img' or 'right-text-left-img' as the proper style attributes in the 'ImgTitleDescriptionSection' component.</h1>)
    }

}