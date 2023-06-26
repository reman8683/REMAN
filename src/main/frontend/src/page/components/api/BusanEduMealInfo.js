import React, {useEffect, useState} from 'react';
import Navigation from "../Navigation";
import "../../../assets/css/ApiTester.css";
import "../../../assets/css/ApiItem.css"
import loadingImage from "../../../assets/images/loading.png";
import {useGlitch} from "react-powerglitch";
import ListItem from "../ListItem";
import Calendar from "react-calendar";
import moment from "moment";

export default function BusanEduMealInfo() {
    const [schoolURL, setSchoolURL] = useState('');
    const [date, setDate] = useState(new Date());

    const [data, setData] = useState([]);
    const glitch = useGlitch(
        {
            playMode: "click",
            glitchTimeSpan: false,
            shake: {amplitudeX: 0, amplitudeY: 0},
            slice: {count: 15, velocity: 6, minHeight: 0.02, maxHeight: 0.15, hueRotate: true}
        });

    function summit() {
        fetch("/api/busanedu-getmeal/from-school-url?schoolUrl=" + schoolURL + "&date=" + moment(date).format("YYYY/MM/DD"))
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
    }

    return (
        <div className="main">
            <Navigation anchor={true}/>
            <header className="App-header">
                <div className="item-field">
                    <span className="item-title">사용법</span>
                    <br/>
                    <span className="item-description">{window.location.host}/api/busanedu-getmeal/from-school-url?schoolUrl=학교 메인페이지 도메인&date=yyyy/MM/dd</span>
                </div>
                <div className="item-field">
                    <span className="item-title">급식</span>
                    {data.map(e =>
                        <span className="item-description"><br/>{e}</span>
                    )}
                </div>
                <div className="item-field">
                    <input
                        className="api-input"
                        placeholder="학교 메인페이지 url입력"
                        onKeyPress={(e) => {if (e.key === 'Enter') summit()}}
                        onChange={(e) => {setSchoolURL(e.target.value)}}
                    />
                    <button style={{width:"100%", display:"flex"}} className="api-button" ref={glitch.ref} onClick={summit}>입력</button>
                    <br/>
                    <span className="item-title">{moment(date).format("YYYY년 MM월 DD일")}</span>
                    <br/>
                    <Calendar onChange={setDate} value={date} />
                </div>
            </header>
        </div>
    );
};