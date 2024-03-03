import React from 'react';
import {useParams} from "react-router-dom";
import useFetch from "../Hooks/useFetch";

export default function Videos() {
    const { query } = useParams();

    const { loading, error, value } = useFetch('/data/video/popular.json', {}, []);
    if (loading) return <div>로딩중</div>
    if (error) return <div>에러발생 : {error.message}</div>
    console.log("value : ", value);
    console.log("value.items : ", value.items);

    return (
        <div>
            <p>Page : Videos</p>
            <p>query : {query ? `${query}` : 'Not'}</p>

            <br/>

            {value.items.map(videoData => (
                <div key={videoData.id}>{videoData.snippet.title}</div>
            ))}
        </div>
    );
}