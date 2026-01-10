import React from 'react';

const GridBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 w-full h-full bg-gray-50 pointer-events-none">
            {/* The animated grid layer */}
            <div className="absolute inset-0 bg-tech-grid" />

            {/* Optional: Add a subtle orange glow at the top left to match your Hero section */}
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-orange-200/20 blur-[120px] rounded-full" />
        </div>
    );
};

export default GridBackground;