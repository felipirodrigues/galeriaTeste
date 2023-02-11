import axios from 'axios';

const endereco = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const api = {
    getAlbums: async () => {
        const req = await endereco('/albums');
        return req.data;
    },
    getAlbum: async (id) => {
        const req = await endereco(`/albums/${id}`);
        return req.data;
    },
    getPhotosFromAlbum: async (id) => {
        const req = await endereco(`/albums/${id}/photos`);
        return req.data;
    },
    getPhoto: async (id) => {
        const req = await endereco(`/photos/${id}`);
        return req.data;
    }
};