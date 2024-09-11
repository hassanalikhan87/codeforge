import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width="48"
      height="60"
      viewBox="0 0 48 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M31.875 12.8571C33.15 12.8571 34 12 34 10.7143V6.42857C34 2.78571 31.2375 0 27.625 0H6.375C2.7625 0 0 2.78571 0 6.42857V53.5714C0 57.2143 2.7625 60 6.375 60H27.625C31.2375 60 34 57.2143 34 53.5714V45C34 43.7143 33.15 42.8571 31.875 42.8571H4.25V12.8571H31.875ZM14.875 49.2857H19.125C20.4 49.2857 21.25 50.1429 21.25 51.4286C21.25 52.7143 20.4 53.5714 19.125 53.5714H14.875C13.6 53.5714 12.75 52.7143 12.75 51.4286C12.75 50.1429 13.6 49.2857 14.875 49.2857Z"
        fill="black"
      />
      <path
        d="M18.7071 37.6977C17.9791 37.6977 17.4937 37.455 17.0084 36.9697L9.72803 29.6893C8.75732 28.7186 8.75732 27.2625 9.72803 26.2918L17.0084 19.0115C17.9791 18.0408 19.4352 18.0408 20.4059 19.0115C21.3766 19.9822 21.3766 21.4383 20.4059 22.409L14.8243 27.9906L20.4059 33.5722C21.3766 34.5429 21.3766 35.999 20.4059 36.9697C19.9205 37.455 19.4352 37.6977 18.7071 37.6977Z"
        fill="#7620FF"
      />
      <path
        d="M38.0774 37.6977C37.3494 37.6977 36.864 37.455 36.3787 36.9697C35.408 35.999 35.408 34.5429 36.3787 33.5722L41.9603 27.9906L36.3787 22.409C35.408 21.4383 35.408 19.9822 36.3787 19.0115C37.3494 18.0408 38.8055 18.0408 39.7762 19.0115L47.0565 26.2918C48.0272 27.2625 48.0272 28.7186 47.0565 29.6893L39.7762 36.9697C39.2908 37.455 38.8055 37.6977 38.0774 37.6977Z"
        fill="#7620FF"
      />
      <path
        d="M23.4173 40.1245C23.1746 40.1245 22.6892 40.1245 22.4466 39.8819C21.2332 39.3965 20.7478 37.9404 21.4759 36.727L31.183 17.3128C31.6683 16.0994 33.1244 15.614 34.3378 16.3421C35.5512 16.8274 36.0365 18.2835 35.3085 19.4969L25.6014 38.9111C25.116 39.6392 24.388 40.1245 23.4173 40.1245Z"
        fill="#7620FF"
      />
    </svg>
  );
}

export default SvgComponent;
