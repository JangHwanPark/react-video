import React from 'react';
import styles from './VideoCard.module.css';
import {formatAgo} from "../util/date";
import {Link} from "react-router-dom";

export default function VideoCard({videoData}) {
    const { channelId, title, thumbnails, channelTitle, publishedAt } = videoData.snippet;
    const dummyCount = 0;

    return (
        <li className={styles.video_item}>
            <Link to={`/videos/watch/${channelId}`}>
                <img
                    className={styles.thumbnails_image}
                    src={thumbnails.medium.url}
                    alt="thumbnails"
                />
            </Link>
            <div className={styles.video_info}>
                <h3>{title}</h3>
                <p>{channelTitle}</p>
                <span>조회수 {dummyCount}회</span>
                <span>{formatAgo(publishedAt, 'ko')}</span>
            </div>
        </li>
    );
}