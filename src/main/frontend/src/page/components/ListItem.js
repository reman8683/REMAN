import React from "react";
import "../../assets/css/ApiItem.css"

export default function ListItem(props) {
    return (
        <div className="api-item">
            <span className="item-title">{props.title}</span>
            <br/>
            <span className="item-description">{props.description}</span>
        </div>
    );
}