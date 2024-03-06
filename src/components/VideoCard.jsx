import React from 'react';
import styles from './VideoCard.module.css';
import {formatAgo} from "../util/date";
import {Link, useNavigate} from "react-router-dom";
import ViewCounter from "./ViewCounter";

export default function VideoCard({videoData}) {
    const { channelId, title, thumbnails, channelTitle, publishedAt } = videoData.snippet;
    const navigate = useNavigate();

    return (
        <li className={styles.video_item}>
            {/*<Link to={`/videos/watch/${channelId}`}></Link>*/}
            <img
                className={styles.thumbnails_image}
                src={thumbnails.medium.url}
                alt="thumbnails"
                onClick={() => {
                    navigate(`/videos/watch/${channelId}`, { state: { videoData }})
                }}
            />
            <div className={styles.video_info}>
                <h3>{title}</h3>
                <p>{channelTitle}</p>
                <ViewCounter/>
                <span>{formatAgo(publishedAt, 'ko')}</span>
            </div>
        </li>
    );
}