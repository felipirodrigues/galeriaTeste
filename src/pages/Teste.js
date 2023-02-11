import { useEffect, useState } from "react"
import { json } from "react-router-dom"
import { lerAPI } from "../assets/components/api"

export const Teste = () => {
    const [dados, setDados] = useState('')

    useEffect (
        () => {carregarAlbum()}, []
    )

    const carregarAlbum = async () => {
        let json = lerAPI.baixarAlbum()
        setDados(dados)
    }

    return (
        <div>
            Este é o título {dados.title}
        </div>
    )
}