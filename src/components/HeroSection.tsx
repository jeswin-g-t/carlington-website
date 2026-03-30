"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 240;

// Preload images for smooth animation
const preloadImages = () => {
  const images: HTMLImageElement[] = [];
  for (let i = 1; i <= FRAME_COUNT; i++) {
    const img = new Image();
    const paddedIndex = i.toString().padStart(3, '0');
    // Path must be relative to the public directory
    img.src = `/images/herosection/ezgif-frame-${paddedIndex}.png`;
    images.push(img);
  }
  return images;
};

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Set up framer motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate which frame to show
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Load images on mount
  useEffect(() => {
    const preloaded = preloadImages();
    setImages(preloaded);
    
    // Check when first image loads to draw initial frame
    if (preloaded[0]) {
      if (preloaded[0].complete) {
        setImagesLoaded(true);
      } else {
        preloaded[0].onload = () => {
          setImagesLoaded(true);
        };
      }
    }
  }, []);

  // Set window resize handler for canvas
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const parent = canvasRef.current.parentElement;
        if (parent) {
          canvasRef.current.width = parent.clientWidth;
          canvasRef.current.height = parent.clientHeight;
          // Trigger a re-draw if images are loaded
          if (imagesLoaded) {
             const currentIndex = Math.min(Math.max(Math.floor(frameIndex.get()), 0), FRAME_COUNT - 1);
             drawFrame(currentIndex);
          }
        }
      }
    };
    
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial setup
    
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, frameIndex]);

  // Function to draw a specific frame
  const drawFrame = (index: number) => {
    if (!canvasRef.current || !images[index]) return;
    const img = images[index];
    if (img.complete) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;
        
        let renderWidth, renderHeight, xOffset, yOffset;
        
        if (canvasAspect > imgAspect) {
          renderWidth = canvas.width;
          renderHeight = canvas.width / imgAspect;
          xOffset = 0;
          yOffset = (canvas.height - renderHeight) / 2;
        } else {
          renderHeight = canvas.height;
          renderWidth = canvas.height * imgAspect;
          yOffset = 0;
          xOffset = (canvas.width - renderWidth) / 2;
        }
        
        ctx.drawImage(img, xOffset, yOffset, renderWidth, renderHeight);
      }
    }
  };

  // Draw to canvas when frame index changes
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!imagesLoaded) return;
    const index = Math.min(Math.max(Math.floor(latest), 0), FRAME_COUNT - 1);
    drawFrame(index);
  });

  // Initial draw once loaded
  useEffect(() => {
    if (imagesLoaded) {
       drawFrame(0);
    }
  }, [imagesLoaded]);

  // Text scroll animations
  const text1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [1, 1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.1, 0.25], [0, 0, -50]);
  const text1Scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.9]);

  const text2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.55], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.3, 0.4, 0.55], [50, 0, -50]);

  const text3Opacity = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.85], [0, 1, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.6, 0.7, 0.85], [50, 0, -50]);

  const text4Opacity = useTransform(scrollYProgress, [0.85, 0.9, 1], [0, 1, 1]);
  const text4Y = useTransform(scrollYProgress, [0.85, 0.9, 1], [50, 0, 0]);

  return (
    <div ref={containerRef} className="relative w-full h-[600vh]" style={{ position: 'relative' }}>
      {/* Sticky container that stays on screen while scrolling the 600vh */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#050505]">
        
        {/* Background gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,102,0.05),transparent_60%)] pointer-events-none z-0" />
        
        {/* Canvas for the sequence */}
        <div className="absolute inset-0 w-full h-full z-10 flex items-center justify-center">
          <canvas 
            ref={canvasRef} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Overlay gradient to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50 z-20 pointer-events-none" />

        {/* Text Overlays */}
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
          
          {/* Phase 1 Text */}
          <motion.div 
            style={{ opacity: text1Opacity, y: text1Y, scale: text1Scale }}
            className="absolute flex flex-col items-center text-center px-4 top-[12%] md:top-[15%]"
          >
             <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-[#333] leading-none uppercase drop-shadow-2xl shadow-black">
                Carlington
             </h1>
             <p className="text-primary-green font-bold tracking-[0.2em] sm:tracking-[0.4em] uppercase text-[10px] sm:text-sm md:text-xl mt-4 drop-shadow-md shadow-black">
                Legacy Series CT 9999
             </p>
          </motion.div>

          {/* Phase 2 Text */}
          <motion.div 
            style={{ opacity: text2Opacity, y: text2Y }}
            className="absolute flex flex-col items-center md:items-start text-center md:text-left px-8 top-[18%] md:top-[20%] md:left-[10%]"
          >
             <h2 className="text-xl md:text-4xl font-bold text-white uppercase tracking-wider mb-2 drop-shadow-2xl shadow-black">
                Fluid Action
             </h2>
             <p className="text-[#ccc] max-w-[280px] md:max-w-sm text-xs md:text-base drop-shadow-lg shadow-black font-medium">
                Flawless sweeps. Infinite rotations. Experience time without stutter.
             </p>
          </motion.div>

          {/* Phase 3 Text */}
          <motion.div 
            style={{ opacity: text3Opacity, y: text3Y }}
            className="absolute flex flex-col items-center md:items-end text-center md:text-right px-8 bottom-[18%] md:bottom-[20%] md:right-[10%]"
          >
             <h2 className="text-xl md:text-4xl font-bold text-white uppercase tracking-wider mb-2 drop-shadow-2xl shadow-black">
                Signature Accents
             </h2>
             <p className="text-[#ccc] max-w-[280px] md:max-w-sm text-xs md:text-base drop-shadow-lg shadow-black font-medium">
                The striking electric green finishes signify unrivaled tactical performance.
             </p>
          </motion.div>

          {/* Phase 4 Text */}
          <motion.div 
            style={{ opacity: text4Opacity, y: text4Y }}
            className="absolute flex flex-col items-center md:items-end text-center md:text-right px-8 top-[28%] md:top-[30%] md:right-[10%]"
          >
             <h2 className="text-2xl md:text-5xl font-bold text-primary-green uppercase tracking-tighter mb-2 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
                The Masterpiece
             </h2>
             <p className="text-white font-medium max-w-[280px] md:max-w-sm text-xs md:text-base drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                Scroll down to discover the full specifications of the Legacy Series.
             </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
