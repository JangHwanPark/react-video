import axios from 'axios';

export default class Youtube {
    constructor() {
        this.httpClient = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            params: { key : process.env.REACT_APP_YOUTUBE_API_KEY }
        })
    }

    async search(query) {
        return query ? this.#searchByKeyword(query) : this.#mostPopular();
    }

    async #searchByKeyword(query) {
        return this.httpClient
            .get('search', { params: {
                part: 'snippet',
                    maxReulsts: 25,
                    type: 'video',
                    q: query,
                }})
            .then(res => res.data.items)
            .then(items => items.map((item) => ({
                ...item, id: item.id.videoId
            })))
    }

    async #mostPopular() {
        return this.httpClient
            .get('videos', { params: {
                    part: 'snippet',
                    maxReulsts: 25,
                    type: 'video',
                    chart: 'mostPopular',
                }})
            .then(res => res.data.items);
    }
}