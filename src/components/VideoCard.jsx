import React from 'react';
import styles from './VideoCard.module.css';
import {formatAgo} from "../util/date";

export default function VideoCard({videoData}) {
    const { title, thumbnails, channelTitle, publishedAt } = videoData.snippet
    return (
        <li className={styles.video_item}>
            <img src={thumbnails.medium.url} alt="thumbnails"/>
            <div>
                <h3>{title}</h3>
                <p>{channelTitle}</p>
                <span>조회수 0회</span>
                <span>{formatAgo(publishedAt, 'ko')}</span>
            </div>
        </li>
    );
}