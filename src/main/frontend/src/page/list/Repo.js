import React, {useEffect, useState} from "react";
import Navigation from "../components/Navigation";
import {RepoListItem} from "../components/ListItem";

export default function Repo() {
    const [repoList, setData] = useState([]);
    useEffect(() => {
        fetch("/api/repolist")
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
                    {repoList.map(data =>
                        <RepoListItem key={data.id} url={data.url} id={data.id} title={data.title} description={data.lang}/>
                    )}
                </div>
            </header>
        </div>
    );
}