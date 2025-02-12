const Trash = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_7235_2690)">
        <path
          d="M11 14H29M27 14V28C27 29 26 30 25 30H15C14 30 13 29 13 28V14M16 14V12C16 11 17 10 18 10H22C23 10 24 11 24 12V14M18 19V25M22 19V25"
          stroke="#09090B"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_7235_2690"
          x="-32"
          y="-32"
          width="104"
          height="104"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="16" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_7235_2690"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_7235_2690"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default Trash;
