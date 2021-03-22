import React from 'react';
import SideMenu from './components/SideMenu';
import {ColorProvider} from './Contexts/ColorContext'
import styles from "./App.module.css"
import CardsSpace from './components/CardsSpace'


function App() {


  return (
    <div className={styles.container}>
      <ColorProvider>   
        <SideMenu></SideMenu>
        
          <CardsSpace />
        
      </ColorProvider >
    </div>
    
   
  );
}

export default App;
