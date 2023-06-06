import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

export default function WaveAnimation(props) {
    const wave = (
        <svg viewBox="0 0 1000 126" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 42.9533C178.148 -12.5894 287.4 -13.7474 500 42.9533C682.727 88.1203 798.763 97.7368 1000 42.9533V125.861H0V42.9533Z"
                fill={props.color}
            />
        </svg>
    );

    const svgAsString = renderToStaticMarkup(wave);
    const encodedWaveSvg = encodeURIComponent(svgAsString);
    return (
        <div
            style={{
                background: `url('data:image/svg+xml;utf8,${encodedWaveSvg}')`,
                position: "absolute",
                bottom: 0,
                width: "100%",
                // Step 6. height and background size should match the svg viewBox for a smooth animation
                height: 126*props.size,
                backgroundSize: `${1000*props.size}px ${126*props.size}px`,
                // animation-name is wave, we'll create this in the next step
                animation: `wave ${props.animationDuration} linear infinite`,
                animationDirection: props.animationDirection,
                opacity: props.opacity,
            }}
        ></div>
    );
};