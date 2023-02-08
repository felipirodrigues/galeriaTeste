import axios from "axios";
import { json } from "react-router";
import { useState } from "react";
const BASEURL = 'https://jsonplaceholder.typicode.com'



export const lerAPI = {
    baixarLista: async () => {
        let resposta = await fetch(`${BASEURL}/albums`)
        let json = await resposta.json()
        return json
    },
    baixarAlbum: async () => {
        
    }
}
    

