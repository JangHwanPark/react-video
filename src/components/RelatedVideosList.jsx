import React from 'react';
import {useYoutubeApi} from "../context/YoutubeApiContext";
import {useQuery} from "@tanstack/react-query";
import VideoCard from "./VideoCard";

export default function RelatedVideosList({ videoId }) {
    const { youtube } = useYoutubeApi();
    const {isLoading, error, data: allVideo} = useQuery({
        queryKey: ['allVideo', videoId],
        queryFn: () => youtube.relatedVideos(videoId),
    })
    console.log(allVideo)

    return (
        <ul>
            {allVideo && allVideo.map((videoData) => (
                <VideoCard key={videoData.id} videoData={videoData}/>
            ))}
        </ul>
    );
}