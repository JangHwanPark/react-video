import React from 'react';
import styles from './VideosDetail.module.css';
import {useLocation} from "react-router-dom";
import {formatAgo} from "../util/date";
import RelatedVideosList from "../components/RelatedVideosList";
import LikeDislikeButton from "../components/LikeDislikeButton";
import ChannelInfo from "../components/ChannelInfo";
import ViewCounter from "../components/ViewCounter";
import ChannelSubscribeButton from "../components/ChannelSubscribeButton";

export default function VideosDetail() {
    const {state: {videoData}} = useLocation();
    const {channelId, channelTitle, title, publishedAt, description, tags} = videoData.snippet;
    const videoLink = `https://www.youtube.com/embed/${videoData.id}`;

    return (
        <main className={styles.player_container}>
            <div className={styles.player_wrapper}>
                <section className={styles.player_section}>
                    <iframe
                        width="100%"
                        height="460"
                        src={videoLink}
                        frameBorder="0"
                    />
                    <h1>{title}</h1>
                    <div className={styles.channel}>
                        <div className={styles.channel_owner}>
                            <ChannelInfo channelId={channelId} channelTitle={channelTitle}/>
                            {/*<button>가입</button>*/}
                            <ChannelSubscribeButton/>
                        </div>
                        <div className={styles.channel_actions}>
                            <LikeDislikeButton/>
                            <button>공유</button>
                        </div>
                    </div>
                    <div className={styles.channel_information}>
                        <ViewCounter/>
                        <span>{formatAgo(publishedAt, 'ko')}</span>
                    </div>
                    <div className={styles.channel_description}>
                        <p>{description}</p>
                        <p>{tags}</p>
                    </div>
                </section>
                <section className={styles.related_section}>
                    <RelatedVideosList videoId={videoData.id}/>
                </section>
            </div>
        </main>
    );
}