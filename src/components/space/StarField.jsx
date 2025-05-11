import { useEffect, useRef } from "react";
import Star from "./Star";
import StarGlow from "./StarGlow";
import MidStar from "./MidStar";
import ShootingStar from "./ShootingStar";
import CloudSky from "./CloudSky";
import Comet from "./Comet";
import gsap from "gsap";
const StarField = () => {
    const smallStarsCount = 1200;
    const glowStarsCount = 150;
    const colorStarsCount = 500;
    const cloudCount = 10;
    // const [positions, setPositions] = useState([]);

    const generatePositions = () => ({
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
    });
    const smallStars = Array.from({ length: smallStarsCount }, (_, i) => i);
    const glowStars = Array.from({ length: glowStarsCount }, (_, i) => i);
    const colorStars = Array.from({ length: colorStarsCount }, (_, i) => i);
    const clouds = Array.from({ length: cloudCount }, (_, i) => i);

    const spaceRef = useRef();
    useEffect(() => {
        gsap.fromTo(
            spaceRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 7,
                ease: "power1.in",
            }
        );
    });
    return (
        <div
            ref={spaceRef}
            className="h-full fixed inset-0 overflow-hidden m-2"
        >
            <ShootingStar />
            {smallStars.map((item) => {
                const { top, left } = generatePositions();
                return (
                    <div key={item} className="absolute" style={{ top, left }}>
                        <Star />
                    </div>
                );
            })}
            {glowStars.map((item) => {
                return <StarGlow />;
            })}
            {colorStars.map((item) => {
                return <MidStar />;
            })}

            {/* <Comet /> */}
            {clouds.map((item) => {
                const top = Math.random() * 400;
                const left = Math.random() * 300;
                return (
                    <div
                        key={item}
                        className="absolute blur-2xl opacity-20"
                        style={{ top, left }}
                    >
                        {/* <CloudSky /> */}
                    </div>
                );
            })}
        </div>
    );
};
export default StarField;
