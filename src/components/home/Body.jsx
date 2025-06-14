import { useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "./Header";
import TextBody from "./TextBody";

const Body = ({ audioRef, mountStars }) => {
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
                    <p className="font-outfit font-light flex gap-10 sm:gap-15">
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
                        width="100%"
                        height="100%"
                        // onLoad={() => setIsLoaded(true)}
                        className="w-full h-full md:rounded-2xl opacity-0"
                    />
                </div>
                <TextBody audioRef={audioRef} />

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
