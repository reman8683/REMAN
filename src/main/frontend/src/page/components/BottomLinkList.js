import React from "react";
import { NavLink } from "react-router-dom";
import '../../assets/css/Navigation.css'
import React from "react";
import {BsInstagram, BsDiscord, BsGithub, BsTwitch, BsYoutube} from 'react-icons/bs'

export function BottomLinkList() {
    return (
        <nav id="bottom-nav" className="">
            <div></div>
            <div></div>
            <div>
                <NavLink to="/youtube">
                    <BsYoutube size={'5vh'}/>
                </NavLink>
            </div>
            <div>
                <NavLink to="/twitch">
                    <BsTwitch size={'5vh'}/>
                </NavLink>
            </div>
            <div>
                <NavLink to="/github">
                    <BsGithub size={'5vh'}/>
                </NavLink>
            </div>
            <div>
                <NavLink to="/discord">
                    <BsDiscord size={'5vh'}/>
                </NavLink>
            </div>
            <div>
                <NavLink to="/instagram">
                    <BsInstagram size={'5vh'}/>
                </NavLink>
            </div>
            <div></div>
            <div></div>
        </nav>
    );
};

export function Youtube() {
    return (
        <header className="App-header">
            <meta http-equiv="refresh" content="0;url=https://youtube.com/@REMAN9565"/>
        </header>
    );
}

export function Twitch() {
    return (
        <header className="App-header">
            <meta http-equiv="refresh" content="0;url=https://www.twitch.tv/reman9565"/>
        </header>
    );
}

export function Github() {
    return (
        <header className="App-header">
            <meta http-equiv="refresh" content="0;url=https://github.com/reman8683"/>
        </header>
    );
}

export function Discord() {
    return (
        <header className="App-header">
            <meta http-equiv="refresh" content="0;url=https://discord.com/users/554143868199895044/"/>
        </header>
    );
}

export function Instagram() {
    return (
        <header className="App-header">
            <meta http-equiv="refresh" content="0;url=https://www.instagram.com/remaen9565/"/>
        </header>
    );
}