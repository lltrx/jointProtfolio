import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  speed = "fast",
  direction = "left",
}) => {
  const containerRef = useRef(null);
  const [animationPlayState, setAnimationPlayState] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const updateMedia = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', updateMedia);
    updateMedia();

    return () => window.removeEventListener('resize', updateMedia);
  }, []);


  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth / 2;
    const containerWidth = container.offsetWidth;

    const animationDuration =
      speed === "fast" ? "20s" : speed === "slow" ? "40s" : "30s";
    const animationDirection = direction === "left" ? "normal" : "reverse";

    container.style.setProperty("--scroll-width", `${scrollWidth}px`);
    container.style.setProperty("--animation-duration", animationDuration);
    container.style.setProperty("--animation-direction", animationDirection);
    container.style.setProperty("animation-play-state", animationPlayState ? "running" : "paused");
  }, [speed, direction, items]);

  return (
    <div className="overflow-hidden w-full"
      onClick={() => isMobile && setAnimationPlayState(!animationPlayState)}
      onMouseEnter={() => !isMobile && setAnimationPlayState(false)}
      onMouseLeave={() => !isMobile && setAnimationPlayState(true)}
    >
      <div
        ref={containerRef}
        className="flex animate-scroll"
        style={{
          "--scroll-width": "0px",
          "--animation-duration": "30s",
          "--animation-direction": "normal",
          "animation-play-state": animationPlayState ? "running" : "paused",
        }}

      >
        {items.concat(items).map((item, index) => (
          <div key={index} className="flex-shrink-0 mx-4 w-[225px] md:w-[300px]">
            <div className="bg-grey-50 dark:bg-zinc-950 p-6 my-2 rounded-lg shadow-md shadow-orange-500/[0.25] border border-orange-500/[0.4]">
              <p className="text-gray-600 dark:text-gray-300">{item.quote}</p>
              <div className="mt-4">
                <p className="text-zinc-800 dark:text-zinc-200 font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
