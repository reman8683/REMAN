import React, {useState} from 'react';
import Navigation from "../Navigation";
import "../../../assets/css/ApiTester.css";
import "../../../assets/css/ApiItem.css"
import loadingImage from "../../../assets/images/loading.png";

export default function PixivStealer() {
    const [text, setText] = useState('');
    const [image, setImage] = useState('');
    const [clicked, setClicked] = useState(false);

    function summit() {
        setClicked(true)
        setImage("/api/pixivstealer/getimage?tag=" + text + "&unused-hash=" + new Date().getTime())
        setTimeout(() => setClicked(false));
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
                    <button className="api-button" onClick={summit}>입력</button>
                </div>
            </header>
        </div>
    );
};