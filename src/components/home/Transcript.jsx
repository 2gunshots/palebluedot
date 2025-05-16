import { useEffect, useState } from "react";
import subs from "./subs";

const Transcript = ({ audioRef }) => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const transcript = subs;
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const interval = setInterval(() => {
            const currentTime = audio.currentTime;

            const index = transcript.findIndex(
                (entry, i) =>
                    currentTime >= entry.time && currentTime < entry.out
            );
            setActiveIndex(index);
        }, 100);
        return () => clearInterval(interval);
    }, [audioRef]);
    return (
        <div className="font-jura not-italic flex gap-5">
            {/* <span className="not-italic">
                                He wrote: <br />
                            </span> */}
            <div className="my-1 w-3 max-w-3 bg-white/50"></div>
            <div className="font-jura font-medium text-justify text-[14px] lg:text-[16px]">
                {transcript.map((entry, i) => {
                    if (entry.isBreak) {
                        return <br key={`br-${i}`} />;
                    }
                    return (
                        <>
                            <span
                                key={i}
                                className={`transition-colors duration-50 ${
                                    i === activeIndex
                                        ? "bg-white text-black "
                                        : ""
                                }`}
                            >
                                {entry.text}
                            </span>{" "}
                        </>
                    );
                })}
                <pre className="font-jura font-medium text-end not-italic">
                    -Carl Sagan, Pale Blue Dot
                </pre>
            </div>
            {/* <p>
                From this distant vantage point, the Earth might not seem of
                particular interest. But for us, it's different. Consider again
                that dot.{" "}
                <span className="bg-cyan-950">
                    That's here. That's home. That's us.
                </span>{" "}
                On it everyone you love, everyone you know, everyone you ever
                heard of, every human being who ever was, lived out their lives.
                The aggregate of our joy and suffering, thousands of confident
                religions, ideologies, and economic doctrines, every hunter and
                forager, every hero and coward, every creator and destroyer of
                civilization, every king and peasant, every young couple in
                love, every mother and father, hopeful child, inventor and
                explorer, every teacher of morals, every corrupt politician,
                every "superstar," every "supreme leader," every saint and
                sinner in the history of our species lived there--on a mote of
                dust suspended in a sunbeam. <br />
                <br />
                The Earth is a very small stage in a vast cosmic arena. Think of
                the rivers of blood spilled by all those generals and emperors
                so that, in glory and triumph, they could become the momentary
                masters of a fraction of a dot. Think of the endless cruelties
                visited by the inhabitants of one corner of this pixel on the
                scarcely distinguishable inhabitants of some other corner, how
                frequent their misunderstandings, how eager they are to kill one
                another, how fervent their hatreds. <br />
                <br />
                Our posturings, our imagined self-importance, the delusion that
                we have some privileged position in the Universe, are challenged
                by this point of pale light. Our planet is a lonely speck in the
                great enveloping cosmic dark. In our obscurity, in all this
                vastness, there is no hint that help will come from elsewhere to
                save us from ourselves. <br />
                <br />
                The Earth is the only world known so far to harbor life. There
                is nowhere else, at least in the near future, to which our
                species could migrate. Visit, yes. Settle, not yet. Like it or
                not, for the moment the Earth is where we make our stand.
                <br />
                <br />
                It has been said that astronomy is a humbling and
                character-building experience. There is perhaps no better
                demonstration of the folly of human conceits than this distant
                image of our tiny world. To me, it underscores our
                responsibility to deal more kindly with one another, and to
                preserve and cherish the pale blue dot, the only home we've ever
                known.
                <br />
                <br />
                <pre className=" font-grotesk text-end not-italic">
                    -Carl Sagan, Pale Blue Dot
                </pre>
            </p> */}
        </div>
    );
};
export default Transcript;
