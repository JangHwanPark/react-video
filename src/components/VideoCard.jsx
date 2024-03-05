import React from 'react';
import styles from './VideoCard.module.css';
import {formatAgo} from "../util/date";

export default function VideoCard({videoData}) {
    const { title, thumbnails, channelTitle, publishedAt } = videoData.snippet;
    const dummyCount = 0;

    return (
        <li className={styles.video_item}>
            <img
                className={styles.thumbnails_image}
                src={thumbnails.medium.url}
                alt="thumbnails"
            />
            <div className={styles.video_info}>
                <h3>{title}</h3>
                <p>{channelTitle}</p>
                <span>조회수 {dummyCount}회</span>
                <span>{formatAgo(publishedAt, 'ko')}</span>
            </div>
        </li>
    );
}