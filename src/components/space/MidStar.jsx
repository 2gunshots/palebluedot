import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MidStar = () => {
    const starSize = Math.random() * 0.5 + 0.7; //1 to 1.2
    const StarStats = {
        opacity: Math.random() * 0.2 + 0.3, //0.2
        scale: Math.random() * 0.5 + 0.7, //0.7
        duration: Math.random() * 0.3 + 0.1, //0.1
        repeatDelay: Math.random() * 1 + 0.5, //0.5
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
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                opacity: 0,
            }}
            className="absolute shadow-lg shadow-cyan-500/50 rounded-full bg-white flex justify-center items-center"
        >
            {/* <div
                style={{
                    width: `${starSize + Math.random() * 2 + 6}px`,
                    height: `${starSize + Math.random() * 2 + 6}px`,
                    opacity: 0.5,
                }}
                className="absolute rounded-full bg-white blur-2xl"
            ></div> */}
        </div>
    );
};
export default MidStar;
