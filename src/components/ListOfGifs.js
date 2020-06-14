import React, {useEffect, useState} from "react";
import { Loading } from '../styles/Css';
import getGifs from '../services/getGifs';
import Gif  from "./Gif";

export default function ListOfGifs({ keyword }){

    const [loading, setLoading] = useState(false);

    const [gifs, setGifs] = useState([]);    

    useEffect(function(){
        setLoading(true);
        getGifs({ keyword : keyword}).then(res => {          
            setGifs(res);
            setLoading(false);
        })
    }, [keyword]) 

    if (loading) return <Loading>Loading ✨ </Loading>;
    

    return gifs.map(({id, title, url}) => 
        <Gif key={id} title={title} url={url} />
        )

}