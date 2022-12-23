import {useRef, useState, useEffect} from 'react'
import './styles.css'
import '../generalStyles.css'
export default function TitleTwo({title, color}){

    const [isVisible, setIsVisible] = useState(false)

        const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4
    }


    // const callBackFunction = (entries) => {
    //     const [entry] = entries
    //     setIsVisible(entry.isIntersecting)
    // }

  const element = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Check if the element is intersecting with the viewport or its ancestor element
      if (entries[0].isIntersecting) {
        setIsVisible(entries[0].isIntersecting)
        // Perform some action here, such as loading an image or triggering an animation
      }
    });

    if (element.current) {
      observer.observe(element.current);
    }

    return () => {
      observer.unobserve(element.current);
    };
   }, [element]);









    const containerRef = useRef(null)



    // useEffect(() => {
    //     const observer = new IntersectionObserver(callBackFunction, options)
    //     if (containerRef.current) observer.observe(containerRef.current)
        
        
    //     return () => {
    //         if (containerRef.current) observer.unobserve(containerRef.current)
    //     }
        
    // }, [containerRef, options])

    return (
        <div ref={element} className='title-box'>
            {isVisible ? (
                <h2 className={'color-' + color + ' section-title-h2 slideUp-animation'}>{title}</h2>
            ) : null}
        </div>
    )
    
}