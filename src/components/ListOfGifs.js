import React, {useEffect, useState} from "react";
import getGifs from '../services/getGifs';
import Gif  from "./Gif";

export default function ListOfGifs({ keyword }){

    const [loading, setLoading] = useState(true);

    const [gifs, setGifs] = useState([]);    

    useEffect(function(){
        getGifs({ keyword : keyword}).then(res => {     
            
            setGifs(res);
            setLoading(false);
        })
    }, [keyword]) 

    if (loading === true) {
        return 'loading...';
    }

    return gifs.map(({id, title, url}) => 
        <Gif key={id} title={title} url={url} />
        )

}