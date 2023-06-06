import React from 'react';
import Jumbotron from "./components/Jumbotron";
import "../assets/css/Home.css"
import Navigation from "./components/Navigation";

export default function NotFound() {
    return (
        <div className="App">
            <Navigation anchor={false}/>
            <Jumbotron
                title={'NotFound'}
                content={'페이지를 찾을 수 없습니다 :('}>
            </Jumbotron>
            <header className="App-header">
                <p className="bold">:)</p>
            </header>
        </div>
    );
};