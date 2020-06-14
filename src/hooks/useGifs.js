import { useState, useEffect } from 'react';
import getGifs from '../services/getGifs';

export function useGifs({ keyword }){
  
    const [loading, setLoading] = useState(false);

    const [gifs, setGifs] = useState([]);    

    useEffect(function(){
        setLoading(true);
        getGifs({ keyword : keyword}).then(res => {          
            setGifs(res);
            setLoading(false);
        })
    }, [keyword])

    return { loading, gifs}
} 