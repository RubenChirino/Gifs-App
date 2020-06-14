import React, {useEffect, useState, Fragment} from "react";
import { Loading } from '../styles/Css';
import Gif  from "./Gif";
import { useGifs } from "../hooks/useGifs";

export default function ListOfGifs({ keyword }){

   const {loading, gifs} = useGifs({ keyword });
    
    return <div>
        { loading ? <Loading>Loading ✨ </Loading>
           : gifs.map(({id, title, url}) => 
           <Gif key={id} title={title} url={url} />
           )
        }
    </div>

}