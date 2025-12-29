import { useState, useRef, useCallback, useEffect } from "react";

interface ImageComparisonSliderProps {
  dayImage: string;
  nightImage: string;
  dayLabel?: string;
  nightLabel?: string;
}

export default function ImageComparisonSlider({
  dayImage,
  nightImage,
  dayLabel = "Day",
  nightLabel = "Night",
}: ImageComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId);
    }
    setIsDragging(true);
    handleMove(e.clientX);
  }, [handleMove]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (containerRef.current) {
      containerRef.current.releasePointerCapture(e.pointerId);
    }
    setIsDragging(false);
  }, []);

  const handleClick = useCallback((e: React.MouseEvent) => {
    handleMove(e.clientX);
  }, [handleMove]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-xl overflow-hidden cursor-ew-resize select-none border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] transition-all duration-300 touch-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onClick={handleClick}
      data-testid="image-comparison-slider"
    >
      {/* Night image (background) */}
      <img
        src={nightImage}
        alt="Night view with colour night vision"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Day image (foreground with clip) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={dayImage}
          alt="Day view"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Slider line and handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-[#C800FF] shadow-[0_0_20px_rgba(200,0,255,0.8)]"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Handle circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#C800FF] border-4 border-white shadow-[0_0_30px_rgba(200,0,255,0.8)] flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-white" />
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-white" />
          </div>
        </div>
      </div>

      {/* Day label */}
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
        <span className="text-white font-semibold text-sm md:text-base">{dayLabel}</span>
      </div>

      {/* Night label */}
      <div className="absolute top-4 right-4 bg-[#C800FF]/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#C800FF]">
        <span className="text-white font-semibold text-sm md:text-base">{nightLabel}</span>
      </div>
    </div>
  );
}
