import { useEffect, useState } from "react";
import LightningCanvas from "../space/Lightning";
const Footer = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        // Delay initial mount by 2 seconds (2000ms)
        const initialDelay = setTimeout(() => {
            setIsMounted(true);
        }, 2000);

        // Re-mount every 5 seconds (5000ms) after the initial mount
        const interval = setInterval(() => {
            setIsMounted(false); // Unmount it
            setTimeout(() => {
                setIsMounted(true); // Re-mount after delay
            }, 1000); // Re-mount after 1 second delay
        }, 5000);

        // Clean up timeouts and intervals
        return () => {
            clearTimeout(initialDelay);
            clearInterval(interval);
        };
    }, []);
    return (
        <footer className="w-full grid grid-cols-12 gap-3 gap-y-9 z-5 text-center px-10 py-16  pt-20  relative bg-black overflow-hidden">
            {/* <h1 className="font-grotesk text-8xl col-span-7 flex items-end justify-start">
                Skies
            </h1> */}
            <div className="z-10 col-span-12  lg:col-span-5 flex flex-col items-start text-[12px] md:text-[12px] lg:text-[14px] text-start">
                <h4 className="pb-5 lg:pb-7 font-grotesk ">
                    Voyager 1's Pale Blue Dot
                </h4>
                <div className="opacity-70 font-jura font-medium">
                    Hey, glad you're here. We're all growing, learning, reaching
                    for more. And as we do, it's worth remembering that this
                    tiny planet is the only one we've got. Take a moment to
                    really see it.
                </div>
            </div>
            <div className="z-10 font-grotesk text-[12px] md:text-[12px] lg:text-[14px] flex flex-col items-start col-span-5 lg:col-start-8 lg:col-span-2">
                <h5 className="pb-5 lg:pb-7 text-[14px] lg:text-[16px]">
                    Socials
                </h5>
                <ul className="font-jura font-medium grid grid-cols-2 gap-x-5 gap-y-1 md:gap-x-10 md:gap-y-3 grid-rows-2">
                    <li className="opacity-70 text-start hover:underline">
                        <a
                            href="https://www.youtube.com/@iseeefire"
                            target="_blank"
                        >
                            YouTube
                        </a>
                    </li>
                    <li className="opacity-70 text-start hover:underline">
                        <a
                            href="https://www.x.com/crashcraters"
                            target="_blank"
                        >
                            Twitter
                        </a>
                    </li>
                    <li className="opacity-70 text-start hover:underline">
                        <a
                            href="https://www.linkedin.com/in/aarya117/"
                            target="_blank"
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
            <div className="z-10 font-grotesk col-span-7 lg:col-span-3 lg:col-start-10 text-[12px] md:text-[12px] lg:text-[14px] flex flex-col items-start">
                <div>
                    <h5 className="pb-5 lg:pb-7 text-start text-[14px] lg:text-[16px]">
                        Credits
                    </h5>
                    <ul className="font-jura font-medium flex flex-col gap-y-1  md:gap-y-3 ">
                        <li className="opacity-70 text-start">
                            NASA Voyager Mission Archives.
                        </li>
                        <li className="opacity-70 text-start">
                            Audio narration © Carl Sagan Estate.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="absolute w-fit left-1/2 top-1/2 transform  -translate-y-1/2 -translate-x-1/2 ">
                {/* <div className="absolute flex items-center justify-center"> */}
                {isMounted && <LightningCanvas />}
            </div>
        </footer>
    );
};
export default Footer;
