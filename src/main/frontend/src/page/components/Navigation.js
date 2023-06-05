import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import '../../assets/css/Navigation.css'

export default function Nav(props) {
        const [scroll, setScroll] = useState(false);

        useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

        const handleScroll = () => {
            if(window.scrollY >= Math.round(window.innerHeight)) {
                setScroll(true);
            }
            else {
                setScroll(false);
            }
        };

        return (
            <nav id="nav" className={!props.anchor ? (scroll ? "scroll-text" : "scrolled-text") : "anchor-text"}>
                <div></div>
                <div>
                    <NavLink to="/">
                    Home
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/api">
                    API
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/program">
                    Program
                    </NavLink>
                </div>
                <div></div>
            </nav>
        );
}