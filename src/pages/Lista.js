import { useEffect, useState } from "react"
import { api } from "../assets/components/api"
import { Link } from "react-router-dom"

export const Lista = () => { 

    const [lista, setLista] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(
        () => {
            carregarLista()
        },[]
    )

    const carregarLista = async () => {
        setLoading(true)
        let json = await api.getAlbums()
        setLista(json)
        setLoading(false)
    }

    return (
        <div>
            <h1>
                Lista de álbuns
            </h1>
            <div>

                {!loading &&
                    <>
                        <div>Total de álbuns: {lista.length}<br/></div>
                        <ul>
                            {lista.map(
                                (item, key) => (
                                    <li><Link to={`/album/${item.id}`}>{item.title}</Link></li>
                                )
                            )}
                        </ul>
                    </>
                }
                
                
                <h2>Lista</h2>
                {loading &&
                    <div>Carregando...</div>
                }
            </div>
        </div>
    )
}
export default Lista