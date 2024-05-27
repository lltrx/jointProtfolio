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
            stroke={isToggled ? "#b54400" : "#000000"}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Letter"
            d="M 25.1 0 L 25.1 35.05 L 22.85 35.05 L 2.25 3.65 L 2.25 35.05 L 0 35.05 L 0 0 L 2.25 0 L 22.85 31.3 L 22.85 0 L 25.1 0 Z"
            stroke={isToggled ? "#b54400" : "#000000"}
            fill={isToggled ? "#b54400" : "#000000"}
            transform="translate(38, 32)"
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
