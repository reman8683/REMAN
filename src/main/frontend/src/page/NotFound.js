import React from 'react';
import Jumbotron from "./components/Jumbotron";
import "../assets/css/Home.css"
import {useNavigate} from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="App" onClick={() => {
            navigate("/")
        }}>
            <Jumbotron
                title={'NotFound'}
                content={'페이지를 찾을 수 없습니다 :('}>
            </Jumbotron>
        </div>
    );
};