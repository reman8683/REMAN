import React, {useEffect, useState} from "react";
import "../../assets/css/Jumbotron.css";
import loadingImage from "../../assets/images/loading.png";

export default function Jumbotron(props) {
    const [thumbnail, setURL] = useState('');
    useEffect(() => {
        fetch("/api/randomscreenshot")
            .then((response) => response.text())
            .then((data) => {setURL(data);
            })
    }, []);

    return (
        <div id="jumbotron" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url("/api/randomscreenshot"), url(${loadingImage})`
        }}>
            <div className="text-container">
                <span className="title">{props.title}</span>
                <br/>
                <span className="subtitle">{props.content}</span>
            </div>
        </div>
    );
}