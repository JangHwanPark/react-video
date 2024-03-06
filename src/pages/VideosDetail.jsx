import React from 'react';
import styles from './VideosDetail.module.css';
import {useLocation} from "react-router-dom";
import {formatAgo} from "../util/date";
import RelatedVideosList from "../components/RelatedVideosList";
import LikeDislikeButton from "../components/LikeDislikeButton";
import ChannelInfo from "../components/ChannelInfo";
import ViewCounter from "../components/ViewCounter";

export default function VideosDetail() {
    const {state: {videoData}} = useLocation();
    const {channelId, channelTitle, title, publishedAt, description, tags} = videoData.snippet;
    const videoLink = `https://www.youtube.com/embed/${videoData.id}`;

    return (
        <main className={styles.player_container}>
            <div className={styles.player_wrapper}>
                <section>
                    <iframe width="640" height="360" src={videoLink} frameBorder="0"/>
                    <h1>{title}</h1>
                    <div>
                        <ChannelInfo channelId={channelId} channelTitle={channelTitle}/>
                        <button>가입</button>
                        <button>구독</button>
                        <LikeDislikeButton/>
                        <button>공유</button>
                    </div>
                    <div>
                        <ViewCounter/>
                        <span>{formatAgo(publishedAt, 'ko')}</span>
                    </div>
                    <p>{description}</p>
                    <span>{tags}</span>
                </section>
                <RelatedVideosList videoId={videoData.id}/>
            </div>
        </main>
    );
}