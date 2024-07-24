/* eslint-disable react/prop-types */
export default function Logo({ isToggled }) {
  return (
    <svg
      className="w-[40px]"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Loading Icon" clipPath="url(#clip0_8_2)">
        <path
          id="Hexagon"
          d="M8.69873 26.1547L50 2.3094L91.3013 26.1547L91.3013 73.8453L50 97.6906L8.69873 73.8453L8.69873 26.1547Z"
          stroke={isToggled ? "#1a5cb0" : "#3b88ed"}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Letter"
          // PATH FOR THE LETTER "T"
          // d="M 0 0 L 25.8 0 L 25.8 1.08 L 13.5 1.08 L 13.5 42.24 L 12.3 42.24 L 12.3 1.08 L 0 1.08 L 0 0 Z"

          // PATH FOR THE LETTER "N"
          // d="M 25.1 0 L 25.1 35.05 L 22.85 35.05 L 2.25 3.65 L 2.25 35.05 L 0 35.05 L 0 0 L 2.25 0 L 22.85 31.3 L 22.85 0 L 25.1 0 Z"

          d="M29.4 9.6L29.4 0L0 0L0 9.6L8.7 9.6L8.7 37.5L20.7 37.5L20.7 9.6L29.4 9.6Z"
          stroke={isToggled ? "#1a5cb0" : "#3b88ed"}
          fill={isToggled ? "#1a5cb0" : "#3b88ed"}
          transform="translate(35 31) scale(1.02)"
        />
      </g>
      <defs>
        <clipPath id="clip0_8_2">
          <rect width="100" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
