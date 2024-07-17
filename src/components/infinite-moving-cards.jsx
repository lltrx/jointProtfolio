import React, { useEffect, useRef } from "react";

export const InfiniteMovingCards = ({
  items,
  speed = "fast",
  direction = "left",
}) => {
  const containerRef = useRef(null);

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
  }, [speed, direction, items]);

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={containerRef}
        className="flex animate-scroll"
        style={{
          "--scroll-width": "0px",
          "--animation-duration": "30s",
          "--animation-direction": "normal",
        }}
      >
        {items.concat(items).map((item, index) => (
          <div key={index} className="flex-shrink-0 mx-4 w-[300px]">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300">{item.quote}</p>
              <div className="mt-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
