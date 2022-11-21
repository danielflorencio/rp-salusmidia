import {useRef, useEffect, useState} from 'react'
import '../generalStyles.css'
import './styles.css'
export default function SubTitle({subtitle, color}){

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
                <h3 className={'color-' + color + ' section-subtitle-h3 slideUp-animation'}>{subtitle}</h3>
            ) : null}
        </div>
    )
}