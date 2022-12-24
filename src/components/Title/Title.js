import {useRef, useState, useEffect} from 'react'
import './styles.css'
import '../generalStyles.css'
export default function Title({title, color}){

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
            <h2 className={'color-' + color + ' section-title-h2 slideUp-animation'}>{title}</h2>
        ) : null}
    </div>
  )   
}