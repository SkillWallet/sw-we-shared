import React from "react";
import { SvgInputModel } from "../input.model";

function ProjectsCreatedSvg(
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
      viewBox="0 0 20.124 23"
    >
      <path
        d="M17.262 23a2.794 2.794 0 01-1.584-.471 2.83 2.83 0 01-1.045-1.236 14.221 14.221 0 01-5.84-2.639 17.091 17.091 0 01-4.47-5.065v4.065a2.938 2.938 0 011.045 1.033 2.729 2.729 0 01.393 1.437 2.771 2.771 0 01-.842 2.033A2.767 2.767 0 012.886 23a2.773 2.773 0 01-2.033-.842 2.766 2.766 0 01-.841-2.032A2.731 2.731 0 01.4 18.687a2.932 2.932 0 011.045-1.033V5.345A2.938 2.938 0 01.4 4.312a2.729 2.729 0 01-.388-1.437A2.771 2.771 0 01.854.842 2.767 2.767 0 012.887 0 2.773 2.773 0 014.92.842a2.769 2.769 0 01.842 2.033 2.784 2.784 0 01-.348 1.37 2.811 2.811 0 01-.932 1.011 16.908 16.908 0 003.527 8.636 12.143 12.143 0 006.94 4.526 2.875 2.875 0 114.346 3.74 2.769 2.769 0 01-2.033.842zM2.875 21.562a1.414 1.414 0 001.025-.415 1.357 1.357 0 00.427-1.011 1.4 1.4 0 00-.427-1.022 1.4 1.4 0 00-1.022-.427 1.357 1.357 0 00-1.011.427 1.414 1.414 0 00-.415 1.022 1.418 1.418 0 001.426 1.426zm0-20.124a1.376 1.376 0 00-1.011.415 1.389 1.389 0 00-.415 1.022A1.389 1.389 0 001.865 3.9a1.376 1.376 0 001.011.415A1.4 1.4 0 003.9 3.886a1.4 1.4 0 00.427-1.022A1.357 1.357 0 003.9 1.853a1.414 1.414 0 00-1.022-.415zM17.25 18.687a1.437 1.437 0 100 2.875 1.457 1.457 0 001.45-1.449 1.357 1.357 0 00-.427-1.011 1.414 1.414 0 00-1.023-.415z"
        transform="translate(-.012)"
      ></path>
    </svg>
  );
}

export default ProjectsCreatedSvg;
