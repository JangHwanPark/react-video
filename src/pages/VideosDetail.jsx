import React from 'react';
import {useParams} from "react-router-dom";

export default function VideosDetail() {
    const { videoId } = useParams();
    console.log(videoId)

    return (
        <div>
            <h1>VideosDetail</h1>
            <p>동적 라우트 값 (videoId) : {videoId}</p>
        </div>
    );
}