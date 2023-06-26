import React, {useEffect, useState} from "react";
import Navigation from "../components/Navigation";
import {ModListItem} from "../components/ListItem";

export default function Mod() {
    const [modList, setData] = useState([]);
    useEffect(() => {
        fetch("/api/modlist")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
    }, []);
    return (
        <div className="main">
            <Navigation anchor={true}/>
            <header className="App-header">
                <div className="api-list">
                    {modList.map(data =>
                        <ModListItem key={data.id} url={data.url} id={data.id} title={data.title} description={data.description} thumbnail={data.thumbnail}/>
                    )}
                </div>
            </header>
        </div>
    );
}