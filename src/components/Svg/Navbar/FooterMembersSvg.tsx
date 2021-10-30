import React from "react";
import { SvgInputModel } from "../input.model";

function FooterMembersSvg(
  { height, width, className }: SvgInputModel = {
    height: "100%",
    width: "100%",
    className: "",
  }
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ height, width }}
      className={className}
      viewBox="0 0 32 29.866"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#fff"></stop>
          <stop offset="1" stopColor="#454545"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#linear-gradient)"
        d="M9.883 14.933a5.747 5.747 0 00-4.417 2.133H3.233a3.821 3.821 0 01-2.3-.675A2.283 2.283 0 010 14.416q0-5.883 2.067-5.883a3.2 3.2 0 01.725.35 10.987 10.987 0 001.625.708A5.846 5.846 0 006.4 9.95a6.7 6.7 0 002.217-.383 8.293 8.293 0 00-.084 1.1 7.338 7.338 0 001.35 4.267zm17.85 10.617a4.153 4.153 0 01-1.217 3.158 4.5 4.5 0 01-3.233 1.158H8.716a4.493 4.493 0 01-3.233-1.158 4.157 4.157 0 01-1.216-3.158q0-.884.059-1.725a17.023 17.023 0 01.234-1.817A14.22 14.22 0 015 20.2a8.514 8.514 0 01.716-1.625 5.886 5.886 0 011.033-1.35 4.333 4.333 0 011.425-.892A5.011 5.011 0 0110.033 16a1.958 1.958 0 01.716.358q.549.358 1.217.8a7.321 7.321 0 001.783.8 7.736 7.736 0 006.282-.8q.668-.442 1.217-.8a1.958 1.958 0 01.717-.358 5.006 5.006 0 011.859.333 4.346 4.346 0 011.425.892 5.853 5.853 0 011.033 1.35A8.589 8.589 0 0127 20.2a14.119 14.119 0 01.442 1.808 17.023 17.023 0 01.234 1.817q.059.842.059 1.725zM10.666 4.267a4.113 4.113 0 01-1.25 3.017A4.106 4.106 0 016.4 8.533a4.115 4.115 0 01-3.017-1.25 4.109 4.109 0 01-1.25-3.017 4.109 4.109 0 011.25-3.016A4.115 4.115 0 016.4 0a4.106 4.106 0 013.017 1.25 4.113 4.113 0 011.249 3.017zm11.733 6.4a6.168 6.168 0 01-1.875 4.525A6.162 6.162 0 0116 17.066a6.171 6.171 0 01-4.525-1.875A6.164 6.164 0 019.6 10.666a6.164 6.164 0 011.875-4.525A6.171 6.171 0 0116 4.267a6.162 6.162 0 014.525 1.875 6.168 6.168 0 011.875 4.524zm9.6 3.75a2.285 2.285 0 01-.933 1.975 3.813 3.813 0 01-2.3.675h-2.233a5.747 5.747 0 00-4.417-2.133 7.338 7.338 0 001.35-4.267 8.293 8.293 0 00-.084-1.1 6.7 6.7 0 002.217.383 5.851 5.851 0 001.983-.358 10.931 10.931 0 001.625-.708 3.17 3.17 0 01.725-.35Q32 8.532 32 14.416zm-2.133-10.15a4.113 4.113 0 01-1.25 3.017 4.266 4.266 0 01-6.034 0 4.109 4.109 0 01-1.25-3.017 4.109 4.109 0 011.25-3.017 4.266 4.266 0 016.034 0 4.113 4.113 0 011.25 3.017z"
      ></path>
    </svg>
  );
}

export default FooterMembersSvg;