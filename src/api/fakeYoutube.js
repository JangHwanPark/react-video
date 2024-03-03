import axios from 'axios';

export default class FakeYoutube {
    constructor() {}

    async search(query) {
        return query ? this.#searchByKeyword(query) : this.#mostPopular();
    }

    async #searchByKeyword(query) {
        return axios
            .get(`/data/video/search.json`)
            .then(res => res.data.items)
            .then(items => items.map((item) => ({
                ...item, id: item.id.videoId
            })))
    }

    async #mostPopular() {
        return axios
            .get(`/data/video/popular.json`)
            .then(res => res.data.items);
    }
}