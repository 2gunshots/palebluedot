import { Link } from "react-router-dom";
import { act, useEffect, useRef, useState } from "react";
const Nav = ({ audioRef }) => {
    // const audioRef = useRef(null);
    const buttonRef = useRef(null);
    const handlePlay = () => {
        audioRef.current.play();
    };

    const transcript = [
        { time: 0.0, text: "Welcome" },
        { time: 1.0, text: "to" },
        { time: 1.2, text: "our" },
        { time: 1.5, text: "website!" },
    ];
    const [activeIndex, setActiveIndex] = useState(-1);
    // useEffect(() => {
    //     const audio = audioRef.current;

    //     if (audio) {
    //         // Start audio muted
    //         audio.muted = true;
    //         audio.play().catch((err) => {
    //             console.log("Muted autoplay failed:", err.message);
    //         });

    //         // Unmute after a delay (3 seconds)
    //         const unmuteTimeout = setTimeout(() => {
    //             if (audio) {
    //                 audio.muted = false;
    //                 audio.play().catch((err) => {
    //                     console.log("Unmuted play failed:", err.message);
    //                 });
    //             }
    //         }, 3000); // Delay in milliseconds

    //         // Clean up timeout if the component is unmounted
    //         return () => clearTimeout(unmuteTimeout);
    //     }
    // }, []);
    useEffect(() => {
        const audio = audioRef.current; //document.getElementById("narration");
        if (!audio) return;
        const interval = setInterval(() => {
            const currentTime = audio.currentTime;
            const index = transcript.findIndex(
                (entry, i) =>
                    currentTime >= entry.time &&
                    (i === transcript.length - 1 ||
                        currentTime < transcript[i + 1].time)
            );
            setActiveIndex(index);
        }, 100); // Check every 100ms

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="top-0 sticky z-10 p-5 border-b grid grid-cols-12 gap-x-3 bg-black text-white">
            <div className="col-span-3 flex justify-center items-center font-grotesk">
                Pale Blue Dot
            </div>
            {/* <audio
                ref={audioRef}
                src="/audio/pale blue dot.mp3"
                preload="auto"
            /> */}
            <div className="col-span-6 flex justify-center items-center">
                {/* {transcript.map((entry, i) => (
                    <span
                        key={i}
                        style={{
                            color: i === activeIndex ? "yellow" : "white",
                            transition: "color 0.2s",
                        }}
                    >
                        {entry.text + " "}
                    </span>
                ))} */}
                {transcript[activeIndex] && (
                    <span key={activeIndex} className="font-grotesk opacity-50">
                        {transcript[activeIndex].text}
                    </span>
                )}
            </div>
            <button
                ref={buttonRef}
                onClick={handlePlay}
                className="px-4 py-2 text-white rounded col-start-11"
            >
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent "></div>
            </button>
        </div>
    );
};

export default Nav;
