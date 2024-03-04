import React from 'react';
import {formatAgo} from "../../util/date";

export default function VideoCard({videoData}) {
    const { title, thumbnails, publishedAt } = videoData.snippet
    return (
        <div>
            <img src={thumbnails.medium.url} alt="thumbnails"/>
            <h3>{title}</h3>
            <div>
                <span>조회수 0회</span>
                <span>{formatAgo(publishedAt, 'ko')}</span>
            </div>
        </div>
    );
}