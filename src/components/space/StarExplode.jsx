import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const StarExplode = () => {
    const starSize = Math.random() * 0.9 + 0.4; //.3 to 1.2
    const StarStats = {
        opacity: Math.random() * 0.2 + 0.3, //0.2
        scale: Math.random() * 0.5 + 0.5, //0.7
        duration: Math.random() * 0.3 + 0.1, //0.1
        repeatDelay: Math.random() * 5 + 0.5, //0.5
    };
    const starRef = useRef(null);
    const explodeRef = useRef(null);
    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            starRef.current,
            {
                // opacity: 0,
                opacity: 0.4,
                scale: 1,
            },
            {
                opacity: 1, //.1 to .4
                scale: 2,
                duration: 0.2,
                delay: 5,
                backgroundColor: "violet",
                // repeat: -1,
                // repeatDelay: StarStats.repeatDelay,
            }
        )
            .to(starRef.current, {
                // opacity: 0,
                scale: 1,
                duration: 0.2,
                delay: 0.1,
            })

            .fromTo(
                explodeRef.current,
                {
                    scale: 0,
                },
                {
                    scale: 15,
                    opacity: 0,
                    duration: 5,
                    ease: "power3",
                }
            )
            .to(
                starRef.current,
                {
                    // scale: 0,
                    backgroundColor: "#000000",
                    duration: 3,
                    // ease: "power2",
                    delay: 0.3,
                },
                "<"
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
            }}
            className="absolute flex justify-center items-center rounded-full bg-white"
        >
            <div
                ref={explodeRef}
                style={{ width: "1px", height: "1px", scale: 10 }}
                className="absolute flex justify-center items-center bg-violet-700 blur-[1px]"
            >
                <div
                    ref={explodeRef}
                    style={{ width: "2px", height: "2px" }}
                    className="absolute flex justify-center items-center bg-violet-500 blur-[2px]"
                >
                    <div
                        style={{ width: "5px", height: "5px" }}
                        className="absolute bg-violet-400 blur-[6px]"
                    >
                        <div
                            style={{ width: "7px", height: "7px" }}
                            className="absolute bg-violet-300 blur-[10px]"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default StarExplode;
