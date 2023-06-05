import React from 'react';
import Jumbotron from "./components/Jumbotron";
import Profile from "../assets/images/profile.png"
import "../assets/css/Home.css"
import Navigation from "./components/Navigation";

export default function Home() {
    return (
        <div className="App">
            <Navigation/>
            <Jumbotron
                title={'REMAN'}
                content={'레맨9565'}>
            </Jumbotron>
            <header className="App-header">
                <img src={Profile} className="App-logo" alt="logo" />
                <p className="bold-size-limit">레맨입니다</p>
            </header>
        </div>
    );
};