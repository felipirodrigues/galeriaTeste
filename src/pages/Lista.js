import { useEffect, useState } from "react"
import { json } from "react-router"
import axios from "axios"
import { lerAPI } from "../assets/components/api"

const BASEURL = 'https://jsonplaceholder.typicode.com'
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
        let json = await lerAPI.baixarLista()
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
                                    <li>{item.title}</li>
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