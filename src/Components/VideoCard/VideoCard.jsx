import React from 'react';

export default function VideoCard({videoData}) {
    return (
        <div>{videoData.snippet.title}</div>
    );
}