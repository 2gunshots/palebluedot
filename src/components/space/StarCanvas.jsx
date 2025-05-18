import { useEffect, useRef } from "react";
import StarGlow from "./StarGlow";
import ShootingStar from "./ShootingStar";
import gsap from "gsap";
const StarCanvas = () => {
    const canvasRef = useRef();
    const spaceRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        ctx.scale(dpr, dpr);

        const width = window.innerWidth;
        const height = window.innerHeight;

        const smallStarCount = 1200;
        const midStarCount = 500;

        const createTwinkleCycle = () => ({
            opacityTarget: Math.random() * 0.2 + 0.3, // 0.3–0.5
            duration: (Math.random() * 0.3 + 0.1) * 1000,
            delay: (Math.random() * 1 + 0.5) * 1000,
        });

        // Small white twinkling stars
        const smallStars = Array.from({ length: smallStarCount }).map(() => {
            const scale = Math.random() * 0.5 + 0.3;
            const size = (Math.random() * 0.2 + 0.6) * scale;

            const cycle = createTwinkleCycle();
            const now = performance.now();

            return {
                x: Math.random() * width,
                y: Math.random() * height,
                size,
                baseOpacity: 0.8,
                opacityTarget: cycle.opacityTarget,
                duration: cycle.duration,
                nextTwinkleTime: now + cycle.delay,
                twinkleStart: now + cycle.delay,
                twinkling: false,
                glow: false,
            };
        });

        // MidStars: glow & slightly bigger
        const midStars = Array.from({ length: midStarCount }).map(() => {
            const scale = Math.random() * 0.5 + 0.4; // 0.7–1.2
            const size = (Math.random() * 0.6 + 0.4) * scale; // ~0.7–1.4

            const cycle = createTwinkleCycle();
            const now = performance.now();

            return {
                x: Math.random() * width,
                y: Math.random() * height,
                size,
                baseOpacity: 0.8,
                opacityTarget: cycle.opacityTarget,
                duration: cycle.duration,
                nextTwinkleTime: now + cycle.delay,
                twinkleStart: now + cycle.delay,
                twinkling: false,
                glow: true, // MidStars glow
            };
        });

        const stars = [...smallStars, ...midStars];

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const now = performance.now();

            stars.forEach((star) => {
                // Twinkle control
                if (!star.twinkling && now >= star.nextTwinkleTime) {
                    const cycle = createTwinkleCycle();
                    star.twinkling = true;
                    star.twinkleStart = now;
                    star.duration = cycle.duration;
                    star.opacityTarget = cycle.opacityTarget;
                }

                let opacity = star.opacityTarget;
                if (star.twinkling) {
                    const elapsed = now - star.twinkleStart;
                    if (elapsed < star.duration) {
                        const progress = elapsed / star.duration;
                        const pulse = 1 - progress; // ease out
                        opacity =
                            star.baseOpacity -
                            pulse * (star.baseOpacity - star.opacityTarget);
                    } else {
                        star.twinkling = false;
                        star.nextTwinkleTime =
                            now + (Math.random() * 2 + 0.5) * 1000;
                        opacity = star.opacityTarget;
                    }
                }

                if (star.glow) {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = "rgba(0, 255, 255, 0.4)";
                } else {
                    ctx.shadowBlur = 0;
                    ctx.shadowColor = "transparent";
                }

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        animate();
    }, []);
    useEffect(() => {
        gsap.fromTo(
            spaceRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 5,
                ease: "power1.in",
            }
        );
    });

    const glowStarsCount = 150;
    const glowStars = Array.from({ length: glowStarsCount }, (_, i) => i);

    return (
        <div ref={spaceRef} className="fixed w-full h-full m-2">
            <canvas
                ref={canvasRef}
                className="fixed inset-0 z-0 w-full h-full"
            />
            {glowStars.map((item) => {
                return <StarGlow />;
            })}
            <ShootingStar />
        </div>
    );
};

export default StarCanvas;
