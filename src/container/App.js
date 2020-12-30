import React from 'react';
import CardList from '../component/CardList';
import Scroll from '../component/Scroll';
import { Details } from '../Details';
import './App.css';

const App =()=> {
return(
        <div className='tc'>
            <h1 className='f1'>BILLIONAIRES</h1>
            <Scroll>
            <CardList Details={Details}/>
            </Scroll>
        </div>
    ); 
}
export default App;
