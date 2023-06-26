import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import {BottomLinkList, Discord, Github, Instagram, Twitch, Youtube} from "./page/components/BottomLinkList";
import PixivStealer from "./page/components/api/PixivStealer";
import Api from "./page/list/Api";
import Program from "./page/list/Program";
import NotFound from "./page/NotFound";
import React from "react";
import LightShare from "./page/components/program/LightShare";
import Mod from "./page/list/Mod";
import Repo from "./page/list/Repo";
import BusanEduMealInfo from "./page/components/api/BusanEduMealInfo";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/api" element={<Api />} />
                <Route path="/program" element={<Program />} />
                <Route path="/mod" element={<Mod />} />
                <Route path="/repo" element={<Repo />} />

                <Route path="/youtube" element={<Youtube />} />
                <Route path="/twitch" element={<Twitch />} />
                <Route path="/github" element={<Github />} />
                <Route path="/discord" element={<Discord />} />
                <Route path="/instagram" element={<Instagram />} />

                <Route path="/api/test/busan-edu-meal-info" element={<BusanEduMealInfo />}/>
                <Route path="/api/test/pixivstealer" element={<PixivStealer />}/>

                <Route path="/program/lightshare" element={<LightShare />}/>

                <Route path={"*"} element={<NotFound />}/>
            </Routes>
            <BottomLinkList/>
        </div>
    );
}

export default App;
