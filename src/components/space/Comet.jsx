import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Comet = () => {
    const [isMounted, setIsMounted] = useState(true);
    // const [opacity, setOpacity] = useState(0);
    const side = Math.floor(Math.random() + 0.5);
    console.log(side);
    const xStart = -100;
    const yStart = -100;
    const xEnd = window.innerWidth + 50;
    const yEnd = window.innerHeight + 50;
    const dx = xEnd - xStart;
    const dy = yEnd - yStart;
    const angleRad = Math.atan2(dy, dx);
    const angleDeg = angleRad * (180 / Math.PI);
    const width = "100px";
    const height = ".5px";

    const trailRef = useRef(null);
    const starRef = useRef(null);
    useEffect(() => {
        setIsMounted((prev) => !prev);
        gsap.set([trailRef.current, starRef.current], {
            x: xEnd / 2,
            y: yEnd / 2,
            rotation: angleDeg,
        });
        const tl = gsap.timeline({
            delay: 5,
            repeat: -1,
            repeatDelay: 30,
        });
        gsap.set(trailRef.current, {
            opacity: 0,
            clipPath: "inset(0 100% 0 0)",
        });

        // Phase 1: Reveal and fade in
        tl.to(trailRef.current, {
            clipPath: "inset(0 0% 0 0)",
            opacity: 0.5,
            duration: 0.5,
            ease: "power2.out",
        });

        // Phase 2: Fade out after reveal
        tl.to(trailRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.in",
        });
        gsap.fromTo(
            starRef.current,
            {
                x: xStart,
                y: yStart,
                opacity: 0.0,
                clipPath: "inset(0 100% 0 0)", // hide from right
            },
            {
                x: xEnd,
                y: yEnd,
                clipPath: "inset(0 0% 0 0)", // fully visible
                opacity: 0.5, //.1 to .4
                scale: 1,
                duration: 2,
                delay: 5,
                // ease: "power2.inOut",
            }
        );
    }, []);
    return (
        <>
            {isMounted && (
                <div className=" absolute flex justify-center items-center">
                    <div
                        ref={trailRef}
                        style={{
                            width: width,
                            height: height,
                            // transform: `rotate(${angleDeg}deg)`,
                            transformOrigin: "right center",
                            opacity: 0.4,
                        }}
                        className="absolute flex justify-end items-center bg-gradient-to-r from-transparent via-white to-transparent"
                    >
                        {/* <div
                            style={{
                                width: "140px",
                                height: "5px",
                                opacity: 0.3,
                            }}
                            className="absolute flex justify-end items-center blur-sm  bg-gradient-to-r from-transparent to-blue-400"
                        ></div> */}
                    </div>
                    <div
                        ref={starRef}
                        className="absolute bg-gradient-to-r from-transparent to-white"
                        style={{
                            width: "100px",
                            height: "0.5px",
                            transformOrigin: "left center",
                            // transform: `rotate(${angleDeg}deg)`,
                            // left: xEnd / 2, // or wherever the star ends
                            // top: yEnd / 2,
                            // opacity: 0.1,
                        }}
                    ></div>
                </div>
            )}
            {/* <div
                style={{
                    height: "0.5px",
                    width: "500px",
                    transform: `rotate(${angleDeg}deg)`,
                    opacity: 0.5,
                    transformOrigin: "center",
                }}
                className="bg-gradient-to-r from-transparent via-white to-transparent absolute"
            /> */}
        </>
    );
};
export default Comet;
