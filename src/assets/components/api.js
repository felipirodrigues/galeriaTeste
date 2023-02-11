import axios from "axios"

const endereco = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const api = {
    baixarLista: async () => {
        let resposta = await endereco('/albums')
        return resposta.data
    },    
    infoAlbum: async (id) => {
        let resposta = await endereco(`/albums/${id}`)
        return resposta.data
    },
    galeriaFotos: async (id) => {
        let resposta = await endereco(`/albums/${id}/photos`)
        return resposta.data
    },
    baixarFoto: async (id) => {
        let resposta = await endereco(`photos/${id}`)
        return resposta.data
    }
    // galeriaFotos: async (id) => {
    //     let resposta = await fetch(`${BASEURL}/albums/${id}/photos`)
    //     let json = await resposta.json()
    //     return json
    // },
    // infoFoto: async () => {
        
    // }
}
    

