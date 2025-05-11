import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
const Nav = () => {
    const audioRef = useRef(null);
    const buttonRef = useRef(null);
    const handlePlay = () => {
        audioRef.current.play();
    };
    useEffect(() => {
        const audio = audioRef.current;

        if (audio) {
            // Start audio muted
            audio.muted = true;
            audio.play().catch((err) => {
                console.log("Muted autoplay failed:", err.message);
            });

            // Unmute after a delay (3 seconds)
            const unmuteTimeout = setTimeout(() => {
                if (audio) {
                    audio.muted = false;
                    audio.play().catch((err) => {
                        console.log("Unmuted play failed:", err.message);
                    });
                }
            }, 3000); // Delay in milliseconds

            // Clean up timeout if the component is unmounted
            return () => clearTimeout(unmuteTimeout);
        }
    }, []);

    return (
        <div className="top-0 sticky z-10 p-5 border-b grid grid-cols-12 gap-x-3 bg-black text-white">
            <div className="col-span-6 font-grotesk">Pale Blue Dot</div>
            <audio
                ref={audioRef}
                src="/audio/pale blue dot.mp3"
                preload="auto"
            />
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
