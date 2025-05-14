import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Star = () => {
    const starSize = Math.random() * 0.9 + 0.4; //.3 to 1.2
    const StarStats = {
        opacity: Math.random() * 0.2 + 0.3, //0.2
        scale: Math.random() * 0.5 + 0.5, //0.7
        duration: Math.random() * 0.3 + 0.1, //0.1
        repeatDelay: Math.random() * 5 + 0.5, //0.5
    };
    const starRef = useRef(null);
    useEffect(() => {
        gsap.fromTo(
            starRef.current,
            {
                opacity: 0.8,
            },
            {
                opacity: StarStats.opacity, //.1 to .4
                scale: StarStats.scale,
                duration: StarStats.duration,
                repeat: -1,
                yoyo: false,
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
                opacity: 0,
            }}
            className="rounded-full bg-white"
        ></div>
    );
};
export default Star;
