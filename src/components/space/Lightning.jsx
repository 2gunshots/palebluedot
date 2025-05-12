import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const LightningCanvas = () => {
    const lRef = useRef(null);
    const canvasRef = useRef(null);
    const lightningPointsRef = useRef([]);

    const generateLightningPoints = (
        startX,
        startY,
        endX,
        endY,
        segments = 100
    ) => {
        const points = [{ x: startX, y: startY }];
        const dx = (endX - startX) / segments;
        const dy = (endY - startY) / segments;

        let prevX = startX;
        let prevY = startY;

        for (let i = 1; i <= segments; i++) {
            const x = prevX + dx + (Math.random() - 0.5) * 30; // jagged horizontal
            const y = prevY + dy + (Math.random() - 0.5) * 10; // slight vertical offset
            points.push({ x, y });
            prevX = x;
            prevY = y;
        }

        return points;
    };

    const drawLightning = (ctx, points, progress) => {
        const count = Math.floor(points.length * progress);
        if (count < 2) return;

        // Clear the part of the line already drawn (simulating erase effect)
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // Outer glow (strong blur)
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < count; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.strokeStyle = "rgba(0, 200, 255, 0.5)";
        ctx.lineWidth = 9;
        ctx.shadowColor = "rgba(0, 200, 255, 1)";
        ctx.shadowBlur = 25;
        ctx.stroke();

        // Middle glow (less blur)
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < count; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.strokeStyle = "rgba(0, 200, 255, 0.8)";
        ctx.lineWidth = 4;
        ctx.shadowBlur = 10;
        ctx.stroke();

        // Inner white core (sharp)
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < count; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.strokeStyle = "white";
        ctx.lineWidth = 1;
        ctx.shadowBlur = 0;
        ctx.stroke();
    };

    const generateAndAnimateLightning = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const startX = canvas.width / 2;
        const startY = 0;
        const endX = startX + (Math.random() - 0.5) * 100;
        const endY = canvas.height;

        // Generate points for both lightning paths (main and overlapping)
        const points1 = generateLightningPoints(startX, startY, endX, endY);
        const points2 = generateLightningPoints(
            startX + 10,
            startY + 10,
            endX + 10,
            endY + 10
        ); // Slightly offset

        lightningPointsRef.current = { points1, points2 };

        const progressObj = { progress: 0 };

        gsap.to(progressObj, {
            progress: 1,
            duration: 0.4,
            onUpdate: () => {
                // Clear the canvas each time to simulate erase effect
                drawLightning(ctx, points1, progressObj.progress);
                drawLightning(ctx, points2, progressObj.progress); // Draw overlapping line
            },
        });
    };

    useEffect(() => {
        generateAndAnimateLightning();
        const tl = gsap.timeline();
        tl.fromTo(
            lRef.current,
            {
                opacity: 0,
            },
            { opacity: 1, duration: 0.1 }
        ).to(lRef.current, {
            opacity: 0,
            duration: 1,
        });
    }, []);

    return (
        <div
            style={{
                scale: Math.random() * 2 + 1,
                transform: `rotate(${Math.random() * 360}deg)`,
            }}
            ref={lRef}
            className="blur-sm flex justify-center items-center select-none pointer-events-none"
        >
            <canvas
                ref={canvasRef}
                width={200}
                height={800}
                // style={{ background: "red", display: "block" }}
            />

            {/* <button
                onClick={generateAndAnimateLightning}
                style={{ marginTop: "10px"  }}
            >
                Generate New Lightning
            </button> */}
        </div>
    );
};

export default LightningCanvas;
