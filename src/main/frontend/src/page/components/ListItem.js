import React from "react";
import "../../assets/css/ApiItem.css"
import {useNavigate} from "react-router-dom";

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