import { IconContext } from 'react-icons'
import { useRef, useState, useEffect} from 'react'
import './styles.css'
export default function IconAndDescriptionBlock({icon, title, description}){
   
   
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    
    const callBackFunction = (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callBackFunction, options)
        if (containerRef.current) observer.observe(containerRef.current)
        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [containerRef, options])
   
   
    return(
        <div ref={containerRef} class="block">
            {isVisible ? (
                <div className='fill-block slideUp-animation'>      
                    <div class="align-content-center">
                        <IconContext.Provider value={{className:'icon-sizer-40'}}>
                            {icon}
                        </IconContext.Provider>
                    </div>
                    <h3>{title}</h3>
                    <p className='block-description'>{description}</p>
                </div>
            ) : null}            
            
                
        </div>
    )
}