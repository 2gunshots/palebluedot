// components/CloudSky.jsx
import  { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CloudSky() {
    const cloud1 = useRef(null);
    const cloud2 = useRef(null);

    useEffect(() => {
        gsap.to(cloud1.current, {
            x: "100vw",
            duration: 60,
            repeat: -1,
            ease: "linear",
        });

        // gsap.to(cloud2.current, {
        //     x: "100vw",
        //     duration: 80,
        //     repeat: -1,
        //     ease: "linear",
        //     delay: 10,
        // });
    }, []);

    return (
        <div>
            {/* Cloud 1 */}
            <div
                ref={cloud1}
                className="absolute top-20 left-[-200px] w-10 h-10 bg-white rounded-full shadow-lg opacity-80"
            />

            {/* Cloud 2 */}
            {/* <div
                ref={cloud2}
                className="absolute top-40 left-[-250px] w-60 h-24 bg-white rounded-full shadow-lg opacity-70"
            /> */}
        </div>
    );
}
