import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Header from "./Header";
import Transcript from "./Transcript";
import LightningCanvas from "../space/Lightning";

const Body = ({ audioRef }) => {
    // const [isLoaded, setIsLoaded] = useState(false); //img
    const s1Ref = useRef(null);
    const s2Ref = useRef(null);
    useEffect(() => {
        document.fonts.ready.then(() => {
            gsap.to(s1Ref.current, {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
            });
        });
        document.fonts.ready.then(() => {
            gsap.to(s2Ref.current, {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
            });
        });
    }, []);

    return (
        <div className="z-5">
            <Header />
            <div className="flex flex-col justify-center items-center lg:mx-45 xl:mx-60">
                <div
                    ref={s1Ref}
                    style={{ backdropFilter: "blur(10px)" }}
                    className="flex flex-col justify-center items-center w-full px-10 py-20 gap-10 bg-black/0 opacity-0 overflow-hidden"
                >
                    <p className="font-outfit flex gap-10 sm:gap-15">
                        <span>February 14, 1990</span>
                        <span className="opacity-50">Voyager 1 Looks Back</span>
                    </p>
                    <h1 className=" font-grotesk text-center">
                        Build Beyond Limits
                    </h1>
                </div>

                <div className="w-full h-auto min-h-[200px] bg-black ">
                    <img
                        ref={s2Ref}
                        src="/pale blue dot.webp"
                        alt="A Pale Blue Dot"
                        fetchPriority="high"
                        // onLoad={() => setIsLoaded(true)}
                        className="w-full h-full md:rounded-2xl opacity-0"
                    />
                </div>
                <div
                    style={{ backdropFilter: "blur(5px)" }}
                    className="flex flex-col justify-center w-full px-10 py-15 gap-7 bg-black/0"
                >
                    <div className="w-full">
                        <h2 className="capitalize font-artific text-start">
                            Pale blue dot.
                        </h2>
                    </div>
                    <div className="flex flex-col justify-center gap-7">
                        <p>
                            On September 5, 1977, NASA launched Voyager 1 to
                            explore the outer planets and venture into
                            interstellar space. Designed to study the farthest
                            reaches of the solar system, it also carried the
                            Golden Record, a message for any potential
                            extraterrestrial life. Though never intended to
                            return, Voyager 1 would later provide humanity with
                            a unique and humbling view of itself.
                        </p>
                        <p>
                            Carl Sagan lobbied NASA for ten years to command the
                            Voyager 1 spacecraft to turn its camera homeward to
                            take one last picture from beyond the orbits of
                            Neptune and Pluto. On Valentine's Day in 1990 it did
                            so, revealing our world to appear as a single pixel
                            from that distance. Voyager 1 captured an image of
                            Earth from a record distance of 3.7 billion miles.
                            Carl wrote the following mediation on the meaning of
                            that image. Carl Sagan expanded on the significance
                            of the image in his book, Pale Blue Dot: A Vision of
                            the Human Future in Space.
                        </p>

                        <Transcript audioRef={audioRef} />
                        <p>
                            On December 20, 1996, Carl Sagan passed away at the
                            age of 62. His reflections on the Pale Blue Dot
                            became one of his most enduring legacies, a message
                            urging humanity to look inward with humility and
                            outward with responsibility.
                        </p>
                        <p>
                            The Pale Blue Dot remains a powerful reminder of the
                            rarity of our world and the responsibility we share
                            to protect the only home we have.
                        </p>
                    </div>
                </div>

                {/* <img
                            src="/src/assets/blue.jpg"
                            height="300px"
                            width="300px"
                        /> */}
            </div>
            <div className="bg-none md:mb-20"></div>
        </div>
    );
};
export default Body;
