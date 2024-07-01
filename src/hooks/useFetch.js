import axios from "axios"
import { useState } from "react"

const useFetch = () => {
    const [apidata, setapidata] = useState()

    const getApi = (url) => {
        axios.get(url)
        .then(res => setapidata(res.data))
        .catch(err => console.log(err))

    }

    const getType = (url) => {
        axios.get(url)
        .then(res => setapidata({
            results: res.data.pokemon.map(
                (pok) => pok.pokemon
            )
        }))
        .catch(err => console.log(err))

    }

    
    return[apidata, getApi, getType]
}

export default useFetch
