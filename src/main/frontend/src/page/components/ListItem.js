import React from "react";
import "../../assets/css/ApiItem.css"
import {useNavigate} from "react-router-dom";
import loadingImage from "../../assets/images/loading.png";

export default function ListItem(props) {
    const navigate = useNavigate()
    return (
        <div className="item" onClick={() => {
            navigate("/" + props.origin + "/" + props.id);
        }}>
            <span className="item-title">{props.title}</span>
            <br/>
            <span className="item-description">{props.description}</span>
        </div>
    );
}

export function ModListItem(props) {
    return (
        <div className="item" onClick={() => {
            window.open(props.url)
        }} style={{
            display: "flex",
            margin: "10px auto"
        }}>
            <img className="item-thumbnail" src={props.thumbnail} alt={loadingImage}/>
            <div className="item-container">
                <span className="item-title">{props.title}</span>
                <br/>
                <span className="item-description">{props.description}</span>
            </div>
        </div>
    );
}

export function RepoListItem(props) {
    return (
        <div className="item" onClick={() => {
            window.open(props.url)
        }}>
            <span className="item-title">{props.title}</span>
            <br/>
            <span className="item-description">{props.description}</span>
        </div>
    );
}