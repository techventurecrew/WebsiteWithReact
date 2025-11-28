import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = () => {
    const [visibleItems, setVisibleItems] = useState({});
    const itemsRef = useRef({});

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisibleItems(prev => ({
                        ...prev,
                        [entry.target.dataset.id]: true
                    }));
                }
            });
        }, observerOptions);

        Object.values(itemsRef.current).forEach(el => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return { visibleItems, itemsRef };
};