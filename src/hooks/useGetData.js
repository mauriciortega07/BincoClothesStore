import React, { useEffect, useState } from "react";
import axios from "axios"

const useGetData = (url) => {
    const[dataState, setDataState] = useState({
        products: [],
        isLoading: true,
        error: null
    });

    useEffect(() => {
        setTimeout(() => {
            const getData = async (url) => {
                try {
                    const response = await axios.get(url);
                    setDataState({products: response.data, isLoading: false, error:null});
                    console.log(response.data)
                } catch {
                    setDataState({products: [], isLoading: false, error:"Error al cargar los productos"})
                }
            }

            getData(url)

        }, 2000)

    }, []);

    return dataState;
    
}

export default useGetData;