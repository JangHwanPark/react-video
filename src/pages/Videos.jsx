import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from '@tanstack/react-query';
import VideoCard from "../components/VideoCard/VideoCard";
import {useYoutubeApi} from "../context/YoutubeApiContext";

export default function Videos() {
    const {query} = useParams();
    const { youtube } = useYoutubeApi();
    const {isLoading, error, data: videos} = useQuery({
        queryKey: ['videos', query],
        queryFn: () => youtube.search(query)
    });

    return (
        <div>
            {isLoading && <p>로딩중</p>}
            {error && <p>오류 발생</p>}
            {videos && videos.map((videoData) => (
                <VideoCard key={videoData.id} videoData={videoData}/>
            ))}
        </div>
    );
}