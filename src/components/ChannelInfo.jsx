import React from 'react';
import styles from './ChannelInfo.module.css';
import {useYoutubeApi} from "../context/YoutubeApiContext";
import {useQuery} from "@tanstack/react-query";

export default function ChannelInfo({ channelId, channelTitle }) {
    const {youtube} = useYoutubeApi();
    const {data: url} = useQuery({
        queryKey: ['channel', channelId],
        queryFn: () => youtube.channelImg(channelId),
    })
    return (
        <>
            <img src={url} alt={channelTitle} width="40"/>
            <div className={styles.upload_info}>
                <h3>{channelTitle}</h3>
                <span>구독자 n명</span>
            </div>
        </>
    );
}