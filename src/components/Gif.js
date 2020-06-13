import React from 'react';
import { ImgGif } from "../styles/Css";

export default function Gif({ title, url}) {

    return(
        <div>
            <h4>{title}</h4>
            <ImgGif alt={title} src={url} />
        </div>
    )

}
