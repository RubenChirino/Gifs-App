import React from "react";
import NotFoundPng from "../images/not-found.png";
import { NotFoundSection, NotFoundImg } from "../styles/Css";

export default function NotFound(){

    return(
        <NotFoundSection>
            <h1>Error: 404 Not Found</h1>      
            <NotFoundImg src={NotFoundPng}  />     
        </NotFoundSection>
    )

} 

/* <img src="../images/not-found.png" /> */