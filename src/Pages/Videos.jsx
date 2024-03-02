import React from 'react';
import {useParams} from "react-router-dom";
import useFetch from "../Hooks/useFetch";

export default function Videos() {
    const { query } = useParams();

    const { loading, error, value } = useFetch('/data/video/related.json', {}, []);
    if (loading) return <div>로딩중</div>
    if (error) return <div>에러발생 : {error.message}</div>
    console.log(value);

    return (
        <div>
            <p>Videos</p>
            <p>query : {query ? `${query}` : 'Not'}</p>
        </div>
    );
}