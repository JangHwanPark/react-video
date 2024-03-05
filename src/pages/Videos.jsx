import React from 'react';
import styles from'./Videos.module.css'
import {useParams} from "react-router-dom";
import {useQuery} from '@tanstack/react-query';
import VideoCard from "../components/VideoCard";
import {useYoutubeApi} from "../context/YoutubeApiContext";

export default function Videos() {
    const {query} = useParams();
    const { youtube } = useYoutubeApi();
    const {isLoading, error, data: videos} = useQuery({
        queryKey: ['videos', query],
        queryFn: () => youtube.search(query)
    });

    return (
        <main className={styles.videos_container}>
            {isLoading && <p>로딩중</p>}
            {error && <p>오류 발생</p>}
            <ul className={styles.videos_list}>
                {videos && videos.map((videoData) => (
                    <VideoCard key={videoData.id} videoData={videoData}/>
                ))}
            </ul>
        </main>
    );
}