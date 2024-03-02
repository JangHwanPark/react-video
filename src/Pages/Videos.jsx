import React from 'react';
import {useParams} from "react-router-dom";

export default function Videos() {
    const { query } = useParams();

    return (
        <div>
            <p>Videos</p>
            <p>query : {query ? `${query}` : 'Not'}</p>
        </div>
    );
}