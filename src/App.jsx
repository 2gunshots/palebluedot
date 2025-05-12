import { useState, useRef, useEffect } from "react";
import Body from "./components/home/Body";
import BlurModal from "./components/home/Modal";
import Nav from "./components/home/Nav";
import StarField from "./components/space/StarField";
import Mission from "./components/home/Mission";
import Footer from "./components/home/Footer";
import LightningCanvas from "./components/space/Lightning";
// import Lenis from "@studio-freight/lenis";

function App() {
    // useEffect(() => {
    // // This Lenis thing has some lag and looks not bad but also not good only due to lag with makes it not soo smooth
    //     const lenis = new Lenis();

    //     function raf(time) {
    //         lenis.raf(time);
    //         requestAnimationFrame(raf);
    //     }

    //     requestAnimationFrame(raf);
    // }, []);
    const audioRef = useRef(null);
    const handlePlay = () => {
        // const audio = audioRef.current;
        // audio.currentTime = 22; // Set the start time
        // audio.play();
        audioRef.current.play();
    };
    const [mountStars, setMountStars] = useState(false);

    return (
        <>
            <div className="flex flex-col min-h-screen w-full bg-theme transition-colors duration-300 ">
                {/* <Nav audioRef={audioRef} /> */}
                <audio
                    ref={audioRef}
                    id="narration"
                    src="/audio/pale blue dot.mp3"
                    preload="auto"
                />

                {mountStars && <StarField />}
                <BlurModal
                    setMountStars={setMountStars}
                    handlePlay={handlePlay}
                />
                <Body audioRef={audioRef} />
                <Mission />
                <Footer />
            </div>
        </>
    );
}

export default App;
