import { useState, useRef } from "react";
import Body from "./components/home/Body";
import BlurModal from "./components/home/Modal";
import Nav from "./components/home/Nav";
import StarField from "./components/space/StarField";
import Footer from "./components/home/Footer";

function App() {
    const audioRef = useRef(null);
    const handlePlay = () => {
        audioRef.current.play();
    };
    const [mountStars, setMountStars] = useState(false);
    return (
        <>
            <div className="flex flex-col h-screen w-full bg-theme transition-colors duration-300 overflow-auto">
                {/* <Nav /> */}
                <audio
                    ref={audioRef}
                    src="/audio/pale blue dot.mp3"
                    preload="auto"
                />

                {mountStars && <StarField />}
                <BlurModal
                    setMountStars={setMountStars}
                    handlePlay={handlePlay}
                />
                <Body />
                <Footer />
            </div>
        </>
    );
}

export default App;
