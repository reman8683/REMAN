import React, {useRef, useState} from 'react';
import "../../assets/css/program/LightShare.css"
import loadingImage from "../../assets/images/loading.png";
import axios from "axios";
import {useGlitch} from "react-powerglitch";

export default function DragDropFile() {
    const glitch = useGlitch(
        {
            playMode: "click",
            glitchTimeSpan: false,
            shake: {amplitudeX: 0, amplitudeY: 0},
            slice: {count: 15, velocity: 6, minHeight: 0.02, maxHeight: 0.15, hueRotate: true}
        });

    //업로드 라벨
    const [urlFile, setUrlFile] = useState("");
    const [file, setFile] = useState(null);

    const [dragActive, setDragActive] = useState(false);
    // ref
    const inputRef = useRef(null);

    // handle drag events
    const handleDrag = function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };
    // triggers when file is dropped
    const handleDrop = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files);
        }
    };

    // triggers when file is selected with click
    const handleChange = function(e) {
        e.preventDefault();
        setFile(e.target.files[0]);
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files);
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onloadend = () => {
                setUrlFile(reader.result);
            };
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', file);
        console.log(file)
        if (file != null) {
            axios.post('/lightshare/upload', formData)
                .then((response) => {
                    console.log(response.data);
                    // 파일 업로드 성공 시 처리
                })
                .catch((error) => {
                    console.error(error);
                    // 파일 업로드 실패 시 처리
                });
        }
    };

    return (
        <form id="drag-drop-form" onDragEnter={handleDrag} onSubmit={handleSubmit}>
            <div className="drag-drop-field">
            <input ref={inputRef} type="file" id="drag-drop-file" multiple={false} onChange={handleChange} />
                <label id="drag-drop-label" htmlFor="drag-drop-file" className={dragActive ? "drag-active" : "" }
                       style={{
                           backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${urlFile}), url(${loadingImage})`
                }}>
                    <div className="drag-drop-text">
                        파일을 드래그하거나 클릭하여 업로드
                    </div>
                </label>
                {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
            </div>
            <button className="drag-drop-button" type="submit" ref={glitch.ref}>업로드</button>
        </form>
    );
}

async function handleFile(files) {
    console.log(files[0].name)
}