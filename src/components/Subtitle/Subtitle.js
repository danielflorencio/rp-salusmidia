import {useRef, useEffect, useState} from 'react'
import '../generalStyles.css'
import './styles.css'
export default function SubTitle({subtitle, color}){

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

    return (
        <div ref={element} className='title-box'>
            {isVisible ? (
                <h3 className={'color-' + color + ' section-subtitle-h3 slideUp-animation'}>{subtitle}</h3>
            ) : null}
        </div>
    )
}