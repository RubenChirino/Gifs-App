import React, { useState } from 'react';
import { AppDiv, Content, Search} from './styles/Css'; 
import ListOfGifs  from "./components/ListOfGifs";

export default function App() {

  const [keyword, setKeyword] = useState('panda');

  return (
    <AppDiv className="App">
      <Content className="App-content">
        <Search type="text" placeholder="Search" onChange={(e) => setKeyword(e.target.value)} />
        <ListOfGifs keyword={keyword} /> 
      </Content>
    </AppDiv>
  );
}

/*<Button onClick={ gifs={gifs}
  () => setGifs(Diferences_Gifs)}>Change Gif</Button> */