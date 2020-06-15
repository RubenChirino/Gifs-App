import React, { useState } from 'react';
import { AppDiv, Content, Search} from '../styles/Css'; 
import ListOfGifs  from "../components/ListOfGifs"; 
import StaticContext from '../context/StaticContext';

export default function App() {

   const keywordToUse = localStorage.getItem('lastKeyword') || 'panda';

  const [keyword, setKeyword] = useState(keywordToUse);

  return (
      <StaticContext.Provider value={{ 
        name: 'Ruben',
        pro: true
      }}>
        <AppDiv className="App">
          <Content className="App-content">    
              <Search type="text" placeholder="Search" onChange={(e) => setKeyword(e.target.value)} />
              <ListOfGifs keyword={keyword} /> 
          </Content>
        </AppDiv>
      </StaticContext.Provider>   
  );
}