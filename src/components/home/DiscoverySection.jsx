import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DiscoverySection = ({ id, title, description, link }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;

        gsap.fromTo(
            el,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%", // Adjust as needed
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <div
            ref={sectionRef}
            className="flex flex-col md:flex-row items-start py-5 md:py-10 gap-x-10 gap-y-3 border-t"
        >
            <h3 className="font-turret opacity-85">
                {String(id).padStart(2, "0")}
            </h3>
            <div className="flex flex-col gap-5 items-start">
                <h4 className="font-outfit">{title}</h4>
                <p className="font-outfit font-light">{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <span className="font-bold font-outfit hover:underline">
                        Explore <sup className="font-normal">↗</sup>
                    </span>
                </a>
            </div>
        </div>
    );
};

export default DiscoverySection;
