import { IconContext } from 'react-icons'
import { useRef, useState, useEffect} from 'react'
import './styles.css'
export default function IconAndDescriptionBlock({icon, title, description}){
   
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
   
    return(
        <div ref={element} class="block">
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