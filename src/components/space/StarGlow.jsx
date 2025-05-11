import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const StarGlow = () => {
    const starSize = Math.random() * 0.5 + 1.5; //1 to 1.2
    const StarStats = {
        opacity: Math.random() * 0.2 + 0.4, //0.2
        scale: Math.random() * 0.5 + 0.5, //0.7
        duration: Math.random() * 0.3 + 0.1, //0.1
        repeatDelay: Math.random() * 5 + 0.5, //0.5
    };
    const starRef = useRef(null);
    useEffect(() => {
        gsap.fromTo(
            starRef.current,
            {
                opacity: 0.5,
            },
            {
                opacity: StarStats.opacity, //.1 to .4
                scale: 1,
                duration: StarStats.duration,
                repeat: -1,
                repeatDelay: StarStats.repeatDelay,
            }
        );
    }, []);
    return (
        <div
            ref={starRef}
            style={{
                width: `${starSize}px`,
                height: `${starSize}px`,
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                opacity: 0,
            }}
            className="absolute shadow-lg shadow-cyan-500/50 rounded-full bg-white flex justify-center items-center"
        >
            <div
                style={{
                    width: `${starSize + Math.random() * 6 + 4}px`,
                    height: `${starSize + Math.random() * 6 + 4}px`,
                    opacity: 0.5,
                }}
                className="absolute rounded-full bg-white blur-xl"
            ></div>
        </div>
    );
};
export default StarGlow;
