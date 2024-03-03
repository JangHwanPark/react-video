import axios from 'axios';

export default class FakeYoutubeClient {
    async search() {
        return axios.get(`/data/video/search.json`)
    }

    async videos() {
        return axios.get(`/data/video/popular.json`)
    }
}