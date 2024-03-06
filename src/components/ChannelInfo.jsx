import React from 'react';
import {useYoutubeApi} from "../context/YoutubeApiContext";
import {useQuery} from "@tanstack/react-query";

export default function ChannelInfo({ channelId, channelTitle }) {
    const {youtube} = useYoutubeApi();
    const {data: url} = useQuery({
        queryKey: ['channel', channelId],
        queryFn: () => youtube.channelImg(channelId),
    })
    return (
        <div>
            <img src={url} alt={channelTitle}/>
            <span>{channelTitle}</span>
            <span>구독자 n명</span>
        </div>
    );
}