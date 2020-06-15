import React, { useContext } from 'react';
import { ImgGif } from "../styles/Css";
import StaticContext from "../context/StaticContext";

export default function Gif({ title, url}) {

   const context = useContext(StaticContext);

   console.log('Contexto:', context);

    return(
        <div>
            <h4>{title}</h4>
            <ImgGif alt={title} src={url} />
        </div>
    )

}
