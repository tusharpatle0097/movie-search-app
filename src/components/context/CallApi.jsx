import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
export const CallApiSearch = createContext(null);

const API_KEY = 'd1856bc9';
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`;


const CallApi = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([])

    useEffect(() => {
        if (searchTerm !== "") {
            getData()
        }
    }, [searchTerm])

    const getData = () => {
        axios.get(`${API_URL}${searchTerm}`)
            .then(res => {
                console.log(res.data.Search, "ooo")
                setData(res.data.Search)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const valueData = {
        searchTerm, setSearchTerm, data
    }

    return (
        <CallApiSearch.Provider value={valueData}>
            {props.children}
        </CallApiSearch.Provider>
    )
}

export default CallApi