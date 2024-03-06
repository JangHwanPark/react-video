import axios from 'axios';

export default class FakeYoutubeClient {
    async search({ params }) {
        // return axios.get(`/data/video/${params.relatedToVideosId ? 'related' : 'search'}.json`);
        return params.relatedToVideosId
            ? axios.get(`/data/video/related.json`)
            : axios.get(`/data/video/search.json`);
    }

    async videos() {
        return axios.get(`/data/video/popular.json`);
    }

    async channels() {
        return axios.get(`/data/video/channel.json`);
    }
}