import React, { useState, useEffect, useRef } from 'react';

interface SlideshowProps {
  images: string[];
  interval?: number; // Time in ms between auto-slides
  height?: string;   // CSS height value
  showArrows?: boolean;
  showDots?: boolean;
  showCaptions?: boolean;
  captions?: string[];
  className?: string;
  effect?: 'fade' | 'slide';
}

const Slideshow: React.FC<SlideshowProps> = ({
  images,
  interval = 5000,
  height = '500px',
  showArrows = true,
  showDots = true,
  showCaptions = false,
  captions = [],
  className = '',
  effect = 'fade',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<number | null>(null);
  const slideshowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAutoPlaying && !isHovered) {
      timerRef.current = window.setTimeout(() => {
        goToNext();
      }, interval);
    }
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, isHovered, isAutoPlaying, interval]);

  const goToNext = () => {
    if (effect === 'fade') {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 500); // Match this with the CSS transition duration
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const goToPrev = () => {
    if (effect === 'fade') {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setIsFading(false);
      }, 500); // Match this with the CSS transition duration
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  const goToSlide = (index: number) => {
    if (effect === 'fade') {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsFading(false);
      }, 500);
    } else {
      setCurrentIndex(index);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div 
      className={`relative overflow-hidden rounded-xl shadow-xl ${className}`} 
      style={{ height }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={slideshowRef}
    >
      {/* Images */}
      <div 
        className={`h-full w-full ${effect === 'slide' ? 'flex transition-transform duration-700 ease-in-out' : ''}`}
        style={effect === 'slide' ? { transform: `translateX(-${currentIndex * 100}%)` } : {}}
      >
        {effect === 'slide' ? (
          // Slide Effect - show all images side by side
          images.map((image, index) => (
            <div 
              key={index} 
              className="relative h-full min-w-full flex-shrink-0"
            >
              <img 
                src={image} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover"
              />
              {showCaptions && captions[index] && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
                  <p className="text-center font-medium">{captions[index]}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          // Fade Effect - stack images on top of each other
          images.map((image, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? (isFading ? 'opacity-0' : 'opacity-100') : 'opacity-0'
              }`}
              style={{ zIndex: index === currentIndex ? 10 : 0 }}
            >
              <img 
                src={image} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover"
              />
              {showCaptions && captions[index] && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
                  <p className="text-center font-medium">{captions[index]}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Slideshow controls */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-20 pointer-events-none">
        {/* Arrow navigation */}
        {showArrows && (
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              className="bg-black/20 hover:bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm transition-all transform hover:scale-110 pointer-events-auto"
              onClick={goToPrev}
              aria-label="Previous slide"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="bg-black/20 hover:bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm transition-all transform hover:scale-110 pointer-events-auto"
              onClick={goToNext}
              aria-label="Next slide"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        )}

        {/* Dot navigation */}
        {showDots && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full pointer-events-auto transition-all ${
                  index === currentIndex 
                    ? 'bg-white scale-110' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Autoplay control */}
        <button
          className="absolute bottom-4 right-4 bg-black/20 hover:bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center pointer-events-auto backdrop-blur-sm transition-colors"
          onClick={toggleAutoPlay}
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          <i className={`fas ${isAutoPlaying ? 'fa-pause' : 'fa-play'}`}></i>
        </button>
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Slideshow;