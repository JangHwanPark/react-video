import React from 'react';
import styles from './VideosDetail.css';
import {useLocation, useParams} from "react-router-dom";
import {formatAgo} from "../util/date";

export default function VideosDetail() {
    const {state: {videoData}} = useLocation();
    const {title, publishedAt, description, tags} = videoData.snippet;
    const videoLink = `https://www.youtube.com/embed/${videoData.id}`;

    return (
        <main className={styles.video_container}>
            <iframe width="640" height="360" src={videoLink} frameBorder="0"/>
            <h1>{title}</h1>
            <div>
                <span>조회수 n회</span>
                <span>{formatAgo(publishedAt, 'ko')}</span>
            </div>
            <p>{description}</p>
            <span>{tags}</span>
        </main>
    );
}