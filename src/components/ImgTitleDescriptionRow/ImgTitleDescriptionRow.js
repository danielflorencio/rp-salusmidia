import { useRef, useState, useEffect} from 'react'
import './styles.css'
export default function ImgTitleDescriptionRow({img, subtitle, description, style, shadowyBorderBox}){
    
    
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
            <div ref={containerRef} class="inner-section step-by-step-row">
                {isVisible ? (
                <>
                    <div className="inner-column left animate-left-column">
                        <h2 className="text-to-left">{subtitle}</h2>
                        <p>{description}</p>
                    </div>
                    <div class="inner-column right mockup animate-right-column">
                        <div className={shadowyBorderBox ? 'shadowyBorderBox' : 'mockup-img'}>
                            <img className='mockup' src={img} alt="mockup"/>
                        </div>
                    </div>
                </>
                ): null}
            </div>
        )
    } else if(style === 'right-text-left-img'){
        return(
            <div ref={containerRef} class="inner-section fix-mobile-flex-direction step-by-step-row">
                
                    <div className="inner-column left mockup">
                        {isVisible ? (
                        <div className='animate-left-column'>
                            <div className={shadowyBorderBox ? 'shadowyBorderBox' : 'mockup-img'}>
                                <img className='mockup' src={img} alt="mockup"/>
                            </div>
                        </div>    
                        ) : null}
                        
                    </div>
                    <div className="inner-column right justify-center">
                        {isVisible ? (
                        <>
                            <h2 className="text-to-left">{subtitle}</h2>
                            <p>{description}</p>
                        </>
                        ) : null}
                    </div>                
            </div>
        )
    } else {
        return(<h1>Error - Use 'left-text-right-img' or 'right-text-left-img' as the proper style attributes in the 'ImgTitleDescriptionSection' component.</h1>)
    }
}