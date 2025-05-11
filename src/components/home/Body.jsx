import { useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "./Header";

const Body = () => {
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
                    className="flex flex-col justify-center items-center w-full px-10 py-20 gap-10  bg-black/0 opacity-0"
                >
                    <p className="font-outfit flex gap-15">
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

                        <div className="font-grotesk font-light not-italic flex gap-5">
                            {/* <span className="not-italic">
                                He wrote: <br />
                            </span> */}
                            <div className="my-1 w-5 bg-white/50"></div>
                            <p>
                                From this distant vantage point, the Earth might
                                not seem of particular interest. But for us,
                                it's different. Consider again that dot. That's
                                here. That's home. That's us. On it everyone you
                                love, everyone you know, everyone you ever heard
                                of, every human being who ever was, lived out
                                their lives. The aggregate of our joy and
                                suffering, thousands of confident religions,
                                ideologies, and economic doctrines, every hunter
                                and forager, every hero and coward, every
                                creator and destroyer of civilization, every
                                king and peasant, every young couple in love,
                                every mother and father, hopeful child, inventor
                                and explorer, every teacher of morals, every
                                corrupt politician, every "superstar," every
                                "supreme leader," every saint and sinner in the
                                history of our species lived there--on a mote of
                                dust suspended in a sunbeam. <br />
                                <br />
                                The Earth is a very small stage in a vast cosmic
                                arena. Think of the rivers of blood spilled by
                                all those generals and emperors so that, in
                                glory and triumph, they could become the
                                momentary masters of a fraction of a dot. Think
                                of the endless cruelties visited by the
                                inhabitants of one corner of this pixel on the
                                scarcely distinguishable inhabitants of some
                                other corner, how frequent their
                                misunderstandings, how eager they are to kill
                                one another, how fervent their hatreds. <br />
                                <br />
                                Our posturings, our imagined self-importance,
                                the delusion that we have some privileged
                                position in the Universe, are challenged by this
                                point of pale light. Our planet is a lonely
                                speck in the great enveloping cosmic dark. In
                                our obscurity, in all this vastness, there is no
                                hint that help will come from elsewhere to save
                                us from ourselves. <br />
                                <br />
                                The Earth is the only world known so far to
                                harbor life. There is nowhere else, at least in
                                the near future, to which our species could
                                migrate. Visit, yes. Settle, not yet. Like it or
                                not, for the moment the Earth is where we make
                                our stand.
                                <br />
                                <br />
                                <div className="text-end not-italic">
                                    -Carl Sagan, Pale Blue Dot
                                </div>
                            </p>
                        </div>
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
