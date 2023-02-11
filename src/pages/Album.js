import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { api } from "../assets/components/api"

export const Album = () => {
    const parametros = useParams()
    const [loading, setLoading] = useState(false)
    const [album, setAlbum] = useState({})
    const [fotos, setFotos] = useState([])

    useEffect(
        () => {
            carregarAlbum(parametros.id)
            carregarFotos(parametros.id)
        }, []
    )

    const carregarAlbum = async (id) => {
        let resposta = await api.infoAlbum(id)
        setAlbum(resposta)
    }

    const carregarFotos = async (id) => {
        setLoading(true)
        let resposta = await api.galeriaFotos(id)
        setFotos(resposta)
        setLoading(false)

    }

    return (
        <div>
            <h1>Este é o álbum {album.title}</h1>
            {loading && <div>Carregando...</div>}
            
            {fotos.map(
                (item, key) => (
                    <Link to={`/foto/${item.id}`}><img src={item.thumbnailUrl}/></Link>
            )
            )}
            
        </div>
    )
}