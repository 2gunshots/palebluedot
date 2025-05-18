import { useState, useEffect, useRef } from "react";
import DiscoverySection from "./DiscoverySection";

const Mission = () => {
    const images = [
        "https://science.nasa.gov/wp-content/uploads/2023/12/voyager-gold-record-display-10-5-1977-30214218763-o.jpg",
        "https://science.nasa.gov/wp-content/uploads/2024/03/voyager-golden-record-cover.jpg",
    ];
    const [randomRecord, setRandomRecord] = useState(
        "https://science.nasa.gov/wp-content/uploads/2023/12/voyager-gold-record-display-10-5-1977-30214218763-o.jpg"
    );

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * images.length);
        setRandomRecord(images[randomIndex]);
    }, []);
    return (
        <div
            style={{ backdropFilter: "blur(10px)" }}
            className="relative z-5 text-center px-10 py-15 bg-white text-black"
        >
            {/* <div
                className="absolute inset-0 bg-white z-[-1]"
                style={{ height: "100%" }}
            ></div> */}
            <div className="relative z-5">
                <h2 className="font-outfit font-semibold text-start py-2 md:py-5">
                    Mission Brief
                </h2>
                <div className="my-7 grid grid-cols-12 md:gap-x-10">
                    <ul className="col-span-12 lg:col-span-7 border-b">
                        <li>
                            <DiscoverySection
                                id={1}
                                title="Sagan's Dream Shot"
                                description="Carl Sagan played a leading role in the U.S. space program. The prominent planetary scientist was a consultant and adviser to NASA beginning in the 1950s. He briefed the Apollo astronauts before their flights to the Moon."
                                link="https://science.nasa.gov/mission/voyager/voyager-1s-pale-blue-dot/"
                            />
                            <DiscoverySection
                                id={2}
                                title="What's on the Record?"
                                description="The record features images and a variety of natural sounds, such thunder, birds, musical selections from different cultures and eras, and spoken greetings in 55 languages."
                                link="https://science.nasa.gov/mission/voyager/golden-record-contents/"
                            />
                            <DiscoverySection
                                id={3}
                                title="Where are Voyagers now?"
                                description="Both Voyager 1 and Voyager 2 have reached interstellar space and each continue their unique journey deeper into the cosmos."
                                link="https://science.nasa.gov/mission/voyager/where-are-voyager-1-and-voyager-2-now/"
                            />
                        </li>
                    </ul>
                    <div className="hidden mx-5 lg:block lg:col-span-5 rounded-full w-fill aspect-square overflow-hidden">
                        <img
                            src={randomRecord}
                            alt="Voyager Golden Record"
                            className="object-cover transform scale-120 origin-center"
                            fetchPriority="low"
                        />
                    </div>
                </div>
            </div>

            <div>
                {/* <p>
                    <span className="font-medium">Text excerpts from: </span>
                    <br />
                    Carl Sagan,{" "}
                    <em>
                        Pale Blue Dot: A Vision of the Human Future in Space
                    </em>
                    , 1994. <br />
                    NASA Voyager Mission Archives. <br />
                    Audio narration © Carl Sagan Estate. <br />
                </p> */}
                {/* <div className="flex gap-25 md:block">
                    <p className="mt-3 flex flex-col  md:flex-row gap-x-2">
                        <span className="font-medium">Sources: </span>
                        <a
                            href="https://www.planetary.org/worlds/pale-blue-dot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            Planetary Society: Pale Blue Dot
                        </a>{" "}
                        <span className="hidden md:block">|</span>{" "}
                        <a
                            href="https://www.loc.gov/item/cosmos000110/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            Library of Congress: Carl Sagan Archive
                        </a>
                    </p>
                    <div className="mt-3 flex flex-col  md:flex-row gap-x-2">
                        <p className="font-medium">Page Creater: </p>
                        <p>Aarya Rokade</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Mission;
