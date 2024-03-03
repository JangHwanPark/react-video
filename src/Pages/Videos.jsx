import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from '@tanstack/react-query';
import VideoCard from "../Components/VideoCard/VideoCard";
import FakeYoutube from "../api/fakeYoutube";

export default function Videos() {
    const {query} = useParams();
    const {isLoading, error, data: videos} = useQuery({
        queryKey: ['videos', query],
        queryFn: () => {
            const youtube = new FakeYoutube();
            return youtube.search(query);
        }
    });

    return (
        <div>
            <p>Page : Videos</p>
            <p>query : {query ? `${query}` : 'Not'}</p>
            <p>데이터 패칭 여부 : {videos ? "성공" : "실패"}</p>

            <br/>

            {isLoading && <p>로딩중</p>}
            {error && <p>오류 발생</p>}
            {videos && videos.map((videoData) => (
                <VideoCard key={videoData.id} videoData={videoData}/>
            ))}
        </div>
    );
}