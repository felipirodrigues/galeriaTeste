import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../assets/components/api"

export const Foto = () => {

    const [titulo, setTitulo] = useState('')
    const [fotoInfo, setFotoInfo] = useState('')
    const parametros = useParams()

    useEffect(
        () => {
            carregarFotoInfo(parametros.id)
        }, []
    )

    const carregarFotoInfo = async (id) => {
        let resposta = await api.baixarFoto(id)
        setFotoInfo(resposta)
    }

    return (
        <div>
            Esta é a página da foto {fotoInfo.title}<br/>
            <img src={fotoInfo.url}/>
        </div>
    )
}