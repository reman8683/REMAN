import React from 'react';
import Jumbotron from "./components/Jumbotron";
import Profile from "../assets/images/profile.png"
import "../assets/css/Home.css"
import "../assets/css/ApiItem.css"
import Navigation from "./components/Navigation";
import {SiIntellijidea} from "react-icons/si";
import {FaJava} from "react-icons/fa";

export default function Home() {
    /*
    <WaveAnimation size={0.5} color={"rgb(32,32,32)"} opacity={1} animationDuration={"12s"} animationDirection={""}/>
            <WaveAnimation size={0.5} color={"rgb(32,32,32)"} opacity={0.5} animationDuration={"28s"} animationDirection={""}/>
            <WaveAnimation size={0.5} color={"rgb(32,32,32)"} opacity={0.75} animationDuration={"20s"} animationDirection={"reverse"}/>
     */
    return (
        <div className="App">
            <Navigation/>
            <Jumbotron
                title={'안녕하세요!'}
                content={'학생개발자 REMAN입니다'}>
            </Jumbotron>

            <header className="App-header">
                <div className="introduce">
                    <img src={Profile} className="App-logo" alt="logo" />
                    <p className="bold-size-limit">안녕하세요!</p>
                    <p className="bold-size-limit" style={{fontSize: "30px"}}>학생개발자 REMAN입니다!</p>
                </div>
                <div className="introduce">
                    <div className="background-icon-container">
                        <FaJava className="background-icon" size={'50vh'}/>
                        <SiIntellijidea className="background-icon" size={'50vh'}/>
                    </div>
                    <div>
                        <p className="bold-size-limit">저는 주로 Java를 사용하여 개발합니다.</p>
                        <p className="bold-size-limit" style={{fontSize: "20px"}}>Kotlin, javascript, C++등의 다양한 언어를 도전중입니다!</p>
                    </div>
                </div>
            </header>
        </div>
    );
};