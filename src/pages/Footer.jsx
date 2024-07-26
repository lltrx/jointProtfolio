import { useState, useEffect } from "react";
import { LinkPreview } from "../components/link-preview";

export default function Footer() {
  const [color, setColor] = useState("#b54400");

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setColor(isDark ? "#b54400" : "#C2410C");
    };

    // Initial check
    updateTheme();

    // Use MutationObserver to watch for class changes on the <html> element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          updateTheme();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true, //configure it to listen to attribute changes
    });

    // Cleanup function to disconnect the observer
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center pt-10 md:pt-20 pb-10 space-y-6">
      <div className="flex md:hidden space-x-10 items-center">
        <a href="https://www.instagram.com/nathanhutch_02/">
          <svg
            className="w-[50px] h-[50px] hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
            fill="none"
            viewBox="0 0 256 256"
            id="Flat"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M128,84a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,164ZM172,32H84A52.059,52.059,0,0,0,32,84v88a52.059,52.059,0,0,0,52,52h88a52.059,52.059,0,0,0,52-52V84A52.059,52.059,0,0,0,172,32Zm44,140a44.04978,44.04978,0,0,1-44,44H84a44.04978,44.04978,0,0,1-44-44V84A44.04978,44.04978,0,0,1,84,40h88a44.04978,44.04978,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,188,76Z"
                stroke={color}
                strokeWidth={8}
              />
            </g>
          </svg>
        </a>
        
        <div className="w-[50px] h-[50px] hover:scale-110 transition duration-300 ease-in-out">
          <a href="https://www.linkedin.com/in/nathan-hutchison-400583188/">
            <svg
              viewBox="0 0 192 192"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <rect
                width="132"
                height="132"
                x="30"
                y="30"
                stroke={color}
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="10"
                rx="16"
              />
              <path
                stroke={color}
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="10"
                d="M66 86v44"
              />

              <circle
                cx="66"
                cy="64"
                r="8"
                fill={color}
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
              />
              <path
                stroke={color}
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="10"
                d="M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26"
              />
            </svg>
          </a>
        </div>

        <a href="https://github.com/NHutch2002">
          <svg
            viewBox="0 0 48 48"
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[50px] h-[43px] hover:scale-110 transition duration-300 ease-in-out"
          >
            <path
              fill="none"
              stroke={color}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5"
            />
          </svg>
        </a>
        
      </div>

      <p className="flex md:hidden text-center text-orange-600">
        <a href="mailto:nathanhutchison02@gmail.com">
          nathanhutchison02@gmail.com
        </a>
      </p>
      <p className="flex text-center text-zinc-600">This website is in beta. If you spot any issues, please don't hesitate drop me an email and let me know!</p>
      <div className="text-slate-800 dark:text-slate-200 underline-offset-2">
        <h1 className="underline-offset-2 text-center">
          Designed and Built by
        </h1>
        <LinkPreview url="https://www.linkedin.com/in/nathan-hutchison-400583188">
          <span className="text-orange-600 hover:underline">
            Nathan Hutchison
          </span>
        </LinkPreview>
        {" & "}
        <LinkPreview url="https://www.linkedin.com/in/turki-almutairi-7bb768231">
          <span className="text-orange-600 hover:underline">
            Turki Almutairi
          </span>
        </LinkPreview>
        <p className="w-full text-center">© 2024</p>
      </div>
    </div>
  );
}
