import styled from 'styled-components'

export const AppDiv = styled.div`
    text-align: center;
`;

export const Content = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export const Search = styled.input`
    padding: 0.5em;
    margin-top: 15px;
    font-size: 20px;
    color: #8350f2;
    background: papayawhip;
    border: none;
    border-radius: 3px;
`;

export const ImgGif = styled.img`
    border-radius: 5px;
`;

export const Loading = styled.i`
    font-size: 50px;
    margin-top: 10px;
`;

//Not Found Styles 

export const NotFoundSection = styled.div`
   text-align: center;
`;

export const NotFoundImg = styled.img`
   width: 50%;
`;