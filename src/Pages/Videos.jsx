import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from '@tanstack/react-query';
import VideoCard from "../Components/VideoCard/VideoCard";

export default function Videos() {
    const {query} = useParams();
    const {isLoading, error, data: videos} = useQuery({
        queryKey: ['videos', query],
        queryFn: async () => {
            return fetch(`/data/video/${query ? 'search' : 'popular'}.json`)
                .then(res => res.json())
                .then(data => data.items);
        }
    });

    return (
        <div>
            <p>Page : Videos</p>
            <p>query : {query ? `${query}` : 'Not'}</p>

            <br/>

            {isLoading && <p>로딩중</p>}
            {error && <p>오류 발생</p>}
            {videos && videos.map((videoData) => (
                <VideoCard key={videoData.id} videoData={videoData}/>
            ))}
        </div>
    );
}