export default class Youtube {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async search(query) {
        return query ? this.#searchByKeyword(query) : this.#mostPopular();
    }

    async relatedVideos(id) {
        return this.#relatedVideosList(id);
    }

    async channelImg(channelId) {
        return this.#channelImgURL(channelId);
    }

    async #searchByKeyword(query) {
        return this.apiClient
            .search({
                params: {
                    part: 'snippet',
                    maxResults: 25,
                    type: 'video',
                    q: query,
                }
            })
            .then(res => res.data.items)
            .then(items => items.map((item) => ({
                ...item, id: item.id.videoId
            })))
    }

    async #mostPopular() {
        return this.apiClient
            .videos({
                params: {
                    part: 'snippet',
                    maxResults: 25,
                    chart: 'mostPopular',
                }
            })
            .then(res => res.data.items);
    }

    async #relatedVideosList(id) {
        return this.apiClient
            .search({
                params: {
                    part: 'snippet',
                    maxResults: 25,
                    type: 'video',
                    relatedToVideosId: id,
                }
            })
            .then(res => res.data.items.map(item => ({
                ...item, id: item.id.videoId
            })))
    }

    async #channelImgURL(channelId) {
        return this.apiClient
            .channels({
                params: {
                    part: 'snippet',
                    channelId
                }
            })
            .then(res => res.data.items[0].snippet.thumbnails.default.url);
    }
}