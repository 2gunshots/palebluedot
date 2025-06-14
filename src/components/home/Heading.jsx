import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Heading = ({ title, color }) => {
    const titleContainer = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        if (!titleRef.current) return;

        const letters = titleRef.current.querySelectorAll(".char");

        gsap.set(letters, { opacity: 0, y: 40, filter: "blur(8px)" });

        gsap.to(letters, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.4,
            ease: "power3.out",
            stagger: 0.04,
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 90%",
                toggleActions: "play none none none",
                once: true,
            },
        });

        gsap.set(titleContainer.current, {
            filter: "blur(50px)",
        });
        gsap.to(titleContainer.current, {
            filter: "blur(0px)",
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 90%",
                toggleActions: "play none none none",
                once: true,
            },
        });
    }, []);

    const splitTitle = title.split("").map((char, index) => {
        return (
            <span key={index} className="inline-block char">
                {char === " " ? "\u00A0" : char}
            </span>
        );
    });

    return (
        <div ref={titleContainer}>
            {color === "white" ? (
                <h2
                    ref={titleRef}
                    className="font-grotesk text-start leading-tight overflow-hidden"
                >
                    {splitTitle}
                </h2>
            ) : (
                <h2
                    ref={titleRef}
                    className="font-outfit font-semibold text-start py-2 md:py-5"
                >
                    {splitTitle}
                </h2>
            )}
        </div>
    );
};
export default Heading;
