import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const ShootingStar = () => {
    const [isMounted, setIsMounted] = useState(true);
    // const [opacity, setOpacity] = useState(0);
    const side = Math.floor(Math.random() + 0.5);
    // console.log(side);
    const xStart = -100;
    const yStart = -100;
    const xEnd = window.innerWidth + 250;
    const yEnd = window.innerHeight + 250;
    const dx = xEnd - xStart;
    const dy = yEnd - yStart;
    const angleRad = Math.atan2(dy, dx);
    const angleDeg = angleRad * (180 / Math.PI);
    const width = "70px";
    const height = ".7px";
    const starRef = useRef(null);
    useEffect(() => {
        // console.log("useEffect triggered");
        // setIsMounted((prev) => !prev);
        // setIsMounted(true);
        gsap.fromTo(
            starRef.current,
            {
                x: xStart,
                y: yStart,
                opacity: 0.5,
            },
            {
                x: xEnd,
                y: yEnd,
                opacity: 0.7, //.1 to .4
                scale: 7,
                duration: 1.3,
                repeat: -1,
                repeatDelay: 30,
                delay: 9,
                ease: "expoScale(0.5,10,none)",
            }
        );
    }, []);
    return (
        <>
            {isMounted && (
                <div
                    ref={starRef}
                    style={{
                        width: width,
                        height: height,
                        transform: `rotate(${angleDeg}deg)`,
                        left: -100,
                        top: -100,

                        // transformOrigin: "right center",
                        // opacity: 0.5,
                    }}
                    className="absolute z-2 flex justify-end items-center bg-gradient-to-r from-transparent to-white"
                >
                    <div
                        style={{
                            width: "20px",
                            height: "1px",
                            opacity: 1,
                        }}
                        className="absolute flex justify-end items-center bg-gradient-to-r from-transparent to-white"
                    >
                        <div
                            style={{
                                width: "100px",
                                height: "2px",
                                opacity: 0.7,
                            }}
                            className="absolute flex justify-end items-center blur-xs bg-gradient-to-r from-transparent to-blue-400"
                        >
                            <div
                                style={{
                                    width: "140px",
                                    height: "5px",
                                    opacity: 0.4,
                                }}
                                className="absolute flex justify-end items-center blur-sm  bg-gradient-to-r from-transparent to-blue-400"
                            ></div>
                        </div>
                    </div>
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
export default ShootingStar;
