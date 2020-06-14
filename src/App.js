import React, { useState } from 'react';
import { AppDiv, Content, Search} from './styles/Css'; 
import ListOfGifs  from "./components/ListOfGifs";

export default function App() {

   const keywordToUse = localStorage.getItem('lastKeyword') || 'panda';

  const [keyword, setKeyword] = useState(keywordToUse);

  return (
    <AppDiv className="App">
      <Content className="App-content">
        <Search type="text" placeholder="Search" onChange={(e) => setKeyword(e.target.value)} />
        <ListOfGifs keyword={keyword} /> 
      </Content>
    </AppDiv>
  );
}