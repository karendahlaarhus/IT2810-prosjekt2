import * as React from "react";
import "./HeadWindow.css";
//import ThemeContext from "../theme-context";
import { useContext } from "react";
import { ThemeContext, DetailContext, OrangeContext } from "../theme-context";

function SvgComponent() {
  const theme = useContext(ThemeContext);
  const detail = useContext(DetailContext);
  const orange = useContext(OrangeContext);

  return (
    <svg
      style={theme}
      width="300"
      height="300"
      viewBox="0 0 610 600"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <clipPath id="_face-clip">
        <path d="M297.171,295.773l0,-0.533c0,-3.485 2.829,-6.315 6.315,-6.315l3.028,0c3.486,0 6.315,2.83 6.315,6.315l0,0.533c1.056,0.148 1.879,1.309 1.879,2.717c0,1.409 -0.823,2.57 -1.879,2.718l0,3.552c0,3.485 -2.829,6.315 -6.315,6.315l-3.028,0c-3.486,0 -6.315,-2.83 -6.315,-6.315l0,-3.552c-1.056,-0.148 -1.879,-1.309 -1.879,-2.718c0,-1.408 0.823,-2.569 1.879,-2.717Z" />
      </clipPath>

      <g clipPath="url(#_face-clip)">
        <circle
          id="sun-second"
          style={orange}
          cx="237.272"
          cy="129.753"
          r="30.27"
          fill="#fff"
        />
        <g id="tree-shadow-second">
          <path
            className="hive"
            id="tree2"
            style={orange}
            d="M138.542,345.677l83.918,0l0,-129.208c0,0 -3.719,-27.145 -26.964,-27.144c-11.406,0.001 -17.799,10.437 -21.55,19.465c-3.751,9.029 4.505,26.409 -0.955,34.708c-7.021,10.668 -11.427,16.387 -13.504,25.284c-2.077,8.898 3.724,19.245 1.041,28.098c-2.769,9.134 -13.99,18.573 -17.655,26.705c-3.02,6.704 -4.331,22.092 -4.331,22.092Z"
            fill="#2d845c"
          />
          <path
            id="shadow2"
            d="M194.848,345.677l27.612,0l0,-129.208l-27.612,129.208Z"
            fill="#262e33"
          />
        </g>
        <g id="house-second">
          <path
            id="chimney2"
            d="M377.005,162.246c0,-1.473 -1.196,-2.668 -2.668,-2.668l-17.92,0c-1.472,0 -2.668,1.195 -2.668,2.668l0,13.076l23.256,0l0,-13.076Z"
            fill="#262e33"
          />
          <rect
            id="window2"
            x="283.6"
            y="279"
            width="42.7"
            height="42"
            fill="#fff"
          />
          <path
            id="wall-beige2"
            d="M339.398,271.958l-116.938,0l0,73.719l116.938,0l0,-73.719Zm-20.047,15.766c0,-1.015 -0.824,-1.839 -1.839,-1.839l-25.024,0c-1.015,0 -1.839,0.824 -1.839,1.839l0,24.552c0,1.015 0.824,1.839 1.839,1.839l25.024,0c1.015,0 1.839,-0.824 1.839,-1.839l0,-24.552Z"
            fill="#ffd7c4"
          />
          <path
            id="door2"
            d="M244.085,316.98c0.05,-8.047 6.462,-14.564 14.352,-14.564c7.92,0 14.351,6.569 14.351,14.659l0,26.602l-28.703,0l0,-26.602l0,-0.095Z"
            fill="#fff"
          />
          <path
            id="roof2"
            d="M377.005,175.322l-116.938,0l-37.607,40.174l116.938,0l37.607,-40.174Z"
            fill="#ffdd47"
          />
          <path
            id="side2"
            d="M409.56,219.094l-32.555,-43.772l-37.607,40.174l0,130.181l70.162,0l0,-126.583Z"
            fill="#fff"
          />
          <rect
            id="wall-yellow2"
            x="222.46"
            y="215.496"
            width="116.938"
            height="57.547"
            fill="#ffc524"
          />
        </g>
        <rect
          id="beach-second"
          x="0"
          y="344.677"
          width="610"
          height="84.808"
          fill="#ffd7c4"
        />
        <g id="yacht-second">
          <path
            id="flag2"
            d="M443.063,296.904c0.301,0.136 0.495,0.436 0.495,0.766c0,0.33 -0.194,0.63 -0.495,0.766c-5.056,2.275 -19.639,8.837 -19.639,8.837l0,-19.206c0,0 14.583,6.562 19.639,8.837Z"
            fill="#ffdd47"
          />
          <path
            id="sail-left2"
            style={orange}
            d="M351.991,398.4c-0.222,0.337 -0.242,0.77 -0.05,1.125c0.191,0.356 0.563,0.578 0.966,0.578c11.565,0 68.383,0 68.383,0l0,-106.701c0,0 -60.279,91.333 -69.299,104.998Z"
            fill="#2d845c"
          />
          <path
            id="sail-right2"
            style={orange}
            d="M493.136,397.894c0.327,0.407 0.392,0.966 0.167,1.437c-0.226,0.472 -0.702,0.772 -1.225,0.772c-13.154,0 -67.587,0 -67.587,0l0,-87.495c0,0 57.706,71.695 68.645,85.286Z"
            fill="#56b49f"
          />
          <path
            id="pole2"
            d="M424.491,288.601c0,-0.884 -0.717,-1.601 -1.6,-1.601c-0.884,0 -1.601,0.717 -1.601,1.601l0,129.641l3.201,0l0,-129.641Z"
            fill="#262e33"
          />
          <path
            id="deck2"
            d="M382.681,450.252c-16.928,-0.962 -32.179,-18.891 -30.71,-34.144l141.268,0c1.469,15.253 -13.783,33.182 -30.711,34.144l-79.847,0Z"
            fill="#fff"
          />
        </g>
      </g>

      <path
        id="frame-face-small"
        d="M319.343,287.73c0,-1.014 -0.823,-1.838 -1.838,-1.838l-25.01,0c-1.015,0 -1.838,0.824 -1.838,1.838l0,24.54c0,1.014 0.823,1.838 1.838,1.838l25.01,0c1.015,0 1.838,-0.824 1.838,-1.838l0,-24.54Zm-22.172,8.043l0,-0.533c0,-3.485 2.829,-6.315 6.315,-6.315l3.028,0c3.486,0 6.315,2.83 6.315,6.315l0,0.533c1.056,0.148 1.879,1.309 1.879,2.717c0,1.409 -0.823,2.57 -1.879,2.718l0,3.552c0,3.485 -2.829,6.315 -6.315,6.315l-3.028,0c-3.486,0 -6.315,-2.83 -6.315,-6.315l0,-3.552c-1.056,-0.148 -1.879,-1.309 -1.879,-2.718c0,-1.408 0.823,-2.569 1.879,-2.717Z"
        fill="#f4efe0"
      />
      <g id="zoom">
        <g id="tree-shadow">
          <path
            id="tree"
            style={orange}
            d="M138.542,345.677l83.918,0l0,-129.208c0,0 -3.719,-27.145 -26.964,-27.144c-11.406,0.001 -17.799,10.437 -21.55,19.465c-3.751,9.029 4.505,26.409 -0.955,34.708c-7.021,10.668 -11.427,16.387 -13.504,25.284c-2.077,8.898 3.724,19.245 1.041,28.098c-2.769,9.134 -13.99,18.573 -17.655,26.705c-3.02,6.704 -4.331,22.092 -4.331,22.092Z"
            fill="#2d845c"
          />
          <path
            id="shadow"
            d="M194.848,345.677l27.612,0l0,-129.208l-27.612,129.208Z"
            fill="#262e33"
          />
        </g>
        <g id="house">
          <path
            id="chimney"
            d="M377.005,162.246c0,-1.473 -1.196,-2.668 -2.668,-2.668l-17.92,0c-1.472,0 -2.668,1.195 -2.668,2.668l0,13.076l23.256,0l0,-13.076Z"
            fill="#262e33"
          />
          <rect
            id="window"
            x="283.6"
            y="279"
            width="42.7"
            height="42"
            fill="#fff"
          />
          <path
            id="wall-beige"
            d="M339.398,271.958l-116.938,0l0,73.719l116.938,0l0,-73.719Zm-20.047,15.766c0,-1.015 -0.824,-1.839 -1.839,-1.839l-25.024,0c-1.015,0 -1.839,0.824 -1.839,1.839l0,24.552c0,1.015 0.824,1.839 1.839,1.839l25.024,0c1.015,0 1.839,-0.824 1.839,-1.839l0,-24.552Z"
            fill="#ffd7c4"
          />
          <path
            id="door"
            d="M244.085,316.98c0.05,-8.047 6.462,-14.564 14.352,-14.564c7.92,0 14.351,6.569 14.351,14.659l0,26.602l-28.703,0l0,-26.602l0,-0.095Z"
            fill="#fff"
          />
          <path
            id="roof"
            d="M377.005,175.322l-116.938,0l-37.607,40.174l116.938,0l37.607,-40.174Z"
            fill="#ffdd47"
          />
          <path
            id="side"
            d="M409.56,219.094l-32.555,-43.772l-37.607,40.174l0,130.181l70.162,0l0,-126.583Z"
            fill="#fff"
          />
          <rect
            id="wall-yellow"
            x="222.46"
            y="215.496"
            width="116.938"
            height="57.547"
            fill="#ffc524"
          />
        </g>
        <rect
          id="beach"
          x="0"
          y="344.677"
          width="610"
          height="84.808"
          fill="#ffd7c4"
        />
        <rect
          id="sea"
          x="30"
          y="429.56"
          width="550"
          height="170"
          fill="#56b49f"
        />
        <circle
          id="sun"
          cx="237.272"
          cy="129.753"
          r="30.27"
          fill="#fff"
          style={orange}
        />
        <g id="yacht">
          <path
            id="flag"
            d="M443.063,296.904c0.301,0.136 0.495,0.436 0.495,0.766c0,0.33 -0.194,0.63 -0.495,0.766c-5.056,2.275 -19.639,8.837 -19.639,8.837l0,-19.206c0,0 14.583,6.562 19.639,8.837Z"
            fill="#ffdd47"
          />
          <path
            id="sail-left"
            style={orange}
            d="M351.991,398.4c-0.222,0.337 -0.242,0.77 -0.05,1.125c0.191,0.356 0.563,0.578 0.966,0.578c11.565,0 68.383,0 68.383,0l0,-106.701c0,0 -60.279,91.333 -69.299,104.998Z"
            fill="#2d845c"
          />
          <path
            id="sail-right"
            style={orange}
            d="M493.136,397.894c0.327,0.407 0.392,0.966 0.167,1.437c-0.226,0.472 -0.702,0.772 -1.225,0.772c-13.154,0 -67.587,0 -67.587,0l0,-87.495c0,0 57.706,71.695 68.645,85.286Z"
            fill="#56b49f"
          />
          <path
            id="pole"
            d="M424.491,288.601c0,-0.884 -0.717,-1.601 -1.6,-1.601c-0.884,0 -1.601,0.717 -1.601,1.601l0,129.641l3.201,0l0,-129.641Z"
            fill="#262e33"
          />
          <path
            id="deck"
            d="M382.681,450.252c-16.928,-0.962 -32.179,-18.891 -30.71,-34.144l141.268,0c1.469,15.253 -13.783,33.182 -30.711,34.144l-79.847,0Z"
            fill="#fff"
          />
        </g>
      </g>
      <path
        id="frame-face"
        d="M610,39.086c0,-21.572 -17.514,-39.086 -39.086,-39.086l-531.828,0c-21.572,0 -39.086,17.514 -39.086,39.086l0,521.828c0,21.572 17.514,39.086 39.086,39.086l531.828,0c21.572,0 39.086,-17.514 39.086,-39.086l0,-521.828Zm-471.485,171.03l0,-11.327c0,-74.116 60.173,-134.289 134.289,-134.289l64.392,0c74.116,0 134.289,60.173 134.289,134.289l0,11.327c22.452,3.138 39.956,27.829 39.956,57.782c0,29.952 -17.504,54.643 -39.956,57.781l0,75.532c0,74.116 -60.173,134.289 -134.289,134.289l-64.392,0c-74.116,0 -134.289,-60.173 -134.289,-134.289l0,-75.532c-22.452,-3.138 -39.956,-27.829 -39.956,-57.781c0,-29.953 17.504,-54.644 39.956,-57.782Z"
        fill="#f4efe0"
      />
    </svg>
  );
}

export default SvgComponent;
