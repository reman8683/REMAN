import React from "react";
import "../../assets/css/Jumbotron.css";
import loadingImage from "../../assets/images/loading.png";
import {useGlitch} from "react-powerglitch";

export default function Jumbotron(props) {
    const glitch = useGlitch(
        {
            timing: {duration: 5000},
            glitchTimeSpan: {start: 0, end: 0.05},
            shake: {amplitudeX: 0, amplitudeY: 0},
            slice: {count: 6, velocity: 15, minHeight: 0.02, maxHeight: 0.15, hueRotate: true}
        });

    return (
        <div ref={glitch.ref} id="jumbotron" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.2)), url("/api/randomscreenshot"), url(${loadingImage})`
        }}>
            <div className="text-container">
                <span className="title">{props.title}</span>
                <br/>
                <span className="subtitle">{props.content}</span>
            </div>
        </div>
    );
}