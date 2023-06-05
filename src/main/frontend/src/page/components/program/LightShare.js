import React from 'react';
import Navigation from "../Navigation";
import "../../../assets/css/ApiTester.css";
import "../../../assets/css/ApiItem.css"
import "../../../assets/css/program/LightShare.css"
import DragDropFile from "../DragDropFile";

export default function LightShare() {
    return (
        <div className="main">
            <Navigation anchor={true}/>
            <header className="App-header">
                <div className="item-field">
                    <span className="item-title">사용법</span>
                    <br/>
                    <span className="item-description">???</span>
                </div>
                <div className="item-field">
                    <DragDropFile/>
                </div>
            </header>
        </div>
    );
};