import {useRef, useState, useEffect} from 'react'
import './styles.css'
import '../generalStyles.css'
export default function Title({title, color}){

    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    
    const callBackFunction = (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callBackFunction, options)
        if (containerRef.current) observer.observe(containerRef.current)
        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [containerRef, options])

    return (
        <div ref={containerRef} className='title-box'>
            {isVisible ? (
                <h2 className={'color-' + color + ' section-title-h2 slideUp-animation'}>{title}</h2>
            ) : null}
        </div>
    )
    
}