import React, {useEffect, useState} from "react";
import Navigation from "../components/Navigation";
import ListItem from "../components/ListItem";

export default function Program() {
    const [ProgramList, setData] = useState([]);
    useEffect(() => {
        fetch("/api/programlist")
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
                    {ProgramList.map(data =>
                        <ListItem key={data.id} origin={"program"} id={data.id} title={data.title} description={data.description}/>
                    )}
                </div>
            </header>
        </div>
    );
}