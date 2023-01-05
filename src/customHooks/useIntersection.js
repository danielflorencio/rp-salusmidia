import { useState, useEffect, useRef } from "react";

const DefaultOptions = {
    root: null,
    rootMargin: '100px',
    threshold: 0,
}

const DefaultOnIntersection = (isIntersecting, ob) => {
    if (isIntersecting) return false;
}

export function useIntersection(onIntersection = DefaultOnIntersection, options = DefaultOptions) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const elemRef = useRef(null);
    const setElem = (elem) => {
        elemRef.current = elem;
    }

    useEffect(() => {
        if (!elemRef.current) return;
        let isUnmounted = false;
        const ob = new IntersectionObserver(([entry]) => {
            if (isUnmounted) return;
            const isElementIntersecting = entry.isIntersecting;
            if (onIntersection(isElementIntersecting, ob) === false) {
                ob.disconnect();
            };
            setIsIntersecting(isElementIntersecting)

        }, { ...options })
        ob.observe(elemRef.current);
        return () => {
            ob.disconnect();
            isUnmounted = true;
        }
    }, [elemRef.current, options]);

    return [isIntersecting, setElem];
}

// https://dev.to/anxiny/custom-react-hook-useintersection-with-intersection-observer-4l4e