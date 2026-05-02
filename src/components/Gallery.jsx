import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5];

const Gallery = () => {
  const { isDarkMode } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Dynamic classes
  const containerClass = isDarkMode 
    ? "bg-gray-800/50" 
    : "bg-white/50";
  const textClass = isDarkMode 
    ? "text-white" 
    : "text-slate-700";
  const arrowClass = isDarkMode 
    ? "bg-gray-700/80 hover:bg-gray-600 text-white" 
    : "bg-white/80 hover:bg-slate-200 text-slate-700";
  const dotActiveClass = isDarkMode 
    ? "bg-blue-500" 
    : "bg-blue-500";
  const dotClass = isDarkMode 
    ? "bg-gray-600 hover:bg-gray-500" 
    : "bg-slate-300 hover:bg-slate-400";

  // Auto-slide functionality
  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
  }, []);

  const stopAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide, stopAutoSlide]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    stopAutoSlide();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    startAutoSlide();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <motion.div
      className="mt-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className={`text-2xl font-bold mb-6 text-center ${textClass}`}>
        Gallery
      </h2>

      <div 
        className={`relative overflow-hidden rounded-2xl ${containerClass} p-4 md:p-6`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Carousel Container */}
        <div className="relative h-64 md:h-80 lg:h-96">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={galleryImages[currentIndex]}
              alt={`Gallery ${currentIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ 
                duration: 0.5,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.02 }}
            />
          </AnimatePresence>
          
          {/* Partial Preview (next image) */}
          <AnimatePresence>
            <motion.img
              key={`next-${currentIndex}`}
              src={galleryImages[(currentIndex + 1) % galleryImages.length]}
              alt="Next preview"
              className="absolute right-0 top-0 bottom-0 w-20 md:w-24 object-cover rounded-r-xl opacity-30 md:opacity-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 0.3 }}
            />
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 ${arrowClass} p-2 md:p-3 rounded-full transition-all shadow-lg`}
          onClick={goToPrev}
          aria-label="Previous image"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 ${arrowClass} p-2 md:p-3 rounded-full transition-all shadow-lg`}
          onClick={goToNext}
          aria-label="Next image"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                index === currentIndex ? dotActiveClass : dotClass
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;
