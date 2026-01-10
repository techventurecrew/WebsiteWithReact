import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 border-2 border-blue-500 rounded-full pointer-events-none z-50"
            animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
            transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
        />
    );
};

export default CustomCursor;