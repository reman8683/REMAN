import React, {useState} from 'react';
import Navigation from "../Navigation";
import "../../../assets/css/ApiTester.css";
import "../../../assets/css/ApiItem.css"
import loadingImage from "../../../assets/images/loading.png";
import {useGlitch} from "react-powerglitch";

export default function PixivStealer() {
    const [text, setText] = useState('');
    const [image, setImage] = useState('');
    const glitch = useGlitch(
        {
            playMode: "click",
            glitchTimeSpan: false,
            shake: {amplitudeX: 0, amplitudeY: 0},
            slice: {count: 15, velocity: 6, minHeight: 0.02, maxHeight: 0.15, hueRotate: true}
        });

    function summit() {
        setImage("/api/pixivstealer/getimage?tag=" + text + "&unused-hash=" + new Date().getTime());
    }

    const onErrorImg = (e) => {
        e.target.src = loadingImage
    }

    return (
        <div className="main">
            <Navigation anchor={true}/>
            <header className="App-header">
                <div className="item-field">
                    <span className="item-title">사용법</span>
                    <br/>
                    <span className="item-description">{window.location.host}/api/pixivstealer/getimage?tag=태그이름</span>
                    <br/>
                    <br/>
                    <span className="item-description">{window.location.host}/api/pixivstealer/geturl?tag=태그이름&count=숫자(필수X)</span>
                </div>
                <div className="item-field">
                    <img className="api-image" src={image} onError={onErrorImg}/>
                    <input
                        className="api-input"
                        placeholder="Pixiv 태그 입력"
                        onKeyPress={(e) => {if (e.key === 'Enter') summit()}}
                        onChange={(e) => {setText(e.target.value)}}
                        value={text}
                    />
                    <button style={{width:"100%"}} className="api-button" ref={glitch.ref} onClick={summit}>입력</button>
                </div>
            </header>
        </div>
    );
};