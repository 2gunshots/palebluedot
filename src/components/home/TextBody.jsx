import Transcript from "./Transcript";
import Heading from "./Heading";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextBody = ({ audioRef }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;

        // Diagonal mask reveal on scroll
        gsap.fromTo(
            el,
            {
                opacity: 1,
                WebkitMaskPosition: "0% 0%",
                maskPosition: "0% 0%",
            },
            {
                duration: 2,
                WebkitMaskPosition: "100% 100%",
                maskPosition: "100% 100%",
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%", // when top of el hits 80% viewport height
                    toggleActions: "play none none none", // play only once
                },
            }
        );

        // Fade opacity from 0 to 1 on scroll
        gsap.fromTo(
            el,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <div
            style={{ backdropFilter: "blur(5px)" }}
            className="flex flex-col justify-center w-full px-10 py-15 gap-7 bg-black/0"
        >
            <div className="w-full">
                <Heading title="Pale Blue Dot." color="white" />
            </div>
            <div
                ref={containerRef}
                className="flex flex-col justify-center gap-7"
            >
                <p>
                    On September 5, 1977, NASA launched Voyager 1 to explore the
                    outer planets and venture into interstellar space. Designed
                    to study the farthest reaches of the solar system, it also
                    carried the Golden Record, a message for any potential
                    extraterrestrial life. Though never intended to return,
                    Voyager 1 would later provide humanity with a unique and
                    humbling view of itself.
                </p>
                <p>
                    Carl Sagan lobbied NASA for ten years to command the Voyager
                    1 spacecraft to turn its camera homeward to take one last
                    picture from beyond the orbits of Neptune and Pluto. On
                    Valentine's Day in 1990 it did so, revealing our world to
                    appear as a single pixel from that distance. Voyager 1
                    captured an image of Earth from a record distance of 3.7
                    billion miles. Carl wrote the following mediation on the
                    meaning of that image. Carl Sagan expanded on the
                    significance of the image in his book, Pale Blue Dot: A
                    Vision of the Human Future in Space.
                </p>

                <Transcript audioRef={audioRef} />
                <p>
                    On December 20, 1996, Carl Sagan passed away at the age of
                    62. His reflections on the Pale Blue Dot became one of his
                    most enduring legacies, a message urging humanity to look
                    inward with humility and outward with responsibility.
                </p>
                <p>
                    The Pale Blue Dot remains a powerful reminder of the rarity
                    of our world and the responsibility we share to protect the
                    only home we have.
                </p>
            </div>
        </div>
    );
};

export default TextBody;
