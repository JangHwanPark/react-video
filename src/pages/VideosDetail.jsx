import React from 'react';
import {useLocation, useParams} from "react-router-dom";

export default function VideosDetail() {
    const { videoId } = useParams();
    const { state : { videoData } } = useLocation();
    const { title, description, tags } = videoData.snippet;

    return (
        <main>
            <h1>VideosDetail</h1>
            <p>동적 라우트 값 (videoId) : {videoId}</p>
            <div>title : {title}</div>
            <div>description : {description}</div>
            <div>publishedAt : publishedAt</div>
            <div>tags : {tags}</div>
        </main>
    );
}