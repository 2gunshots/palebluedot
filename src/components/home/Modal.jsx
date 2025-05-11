import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function BlurModal(props) {
    const [isOpen, setIsOpen] = useState(true);
    const modalRef = useRef(null);

    // GSAP animations when the modal opens
    useEffect(() => {
        if (isOpen && modalRef.current) {
            gsap.fromTo(
                modalRef.current,
                {
                    opacity: 0,
                    scale: 1, // Initial scale when the modal opens
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "power3.out", // Smooth easing
                }
            );
        }
    }, [isOpen]);

    const handleClose = () => {
        gsap.to(modalRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            ease: "power3.in",
            onComplete: () => {
                setIsOpen(false); // Close the modal after animation completes
            },
        });
        // Play audio and trigger stars
        props.handlePlay();
        props.setMountStars(true);
    };

    return (
        <div className="relative">
            {/* Trigger Button */}
            {/* <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded"
            >
                Open Modal
            </button> */}

            {/* Overlay + Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all">
                    {/* Modal Box */}
                    <div
                        ref={modalRef}
                        className="bg-black flex flex-col items-center justify-center p-15 py-20 sm:my-0 sm:mx-20 gap-5 rounded-lg shadow-xl w-full max-w-md relative "
                    >
                        {/* <h2 className="text-2xl font-semibold mb-4">
                            Modal Title
                        </h2> */}
                        <p className="text-center">
                            This experience includes narration by Carl Sagan
                            from the iconic "Pale Blue Dot." To begin, we need
                            your permission to play audio.
                        </p>
                        <button
                            onClick={handleClose}
                            className="mt-6 px-4 py-2 bg-white text-black font-grotesk font-medium rounded-md cursor-pointer hover:opacity-90"
                        >
                            Begin Experience
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BlurModal;
