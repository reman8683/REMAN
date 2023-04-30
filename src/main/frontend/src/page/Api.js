import React, {useEffect, useState} from "react";
import Navigation from "./components/Navigation";
import ListItem from "./components/ListItem";

export default function Api() {
    const [apiList, setData] = useState([]);
    useEffect(() => {
        fetch("/api/apilist")
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
                    {apiList.map((data, index) =>
                        <ListItem key={index} title={data.title} description={data.description}/>
                    )}
                </div>
            </header>
        </div>
    );
}