import React, { createContext } from 'react';
import All from '../component/All';
import Home from './Home';
import Aboutus from './Aboutus';
import Services from './Services';
import Gallery from './Gallery';
import Contactsus from './Contactsus';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NDate from './NDate';
import Statedata from './Statedata';

import ComA from './ComA';

import Effect from './Effect';

import Ref from './Ref';
import Useref from './Useref';

 export const FirstName = createContext();
 export const LastName = createContext();
function Demo(){
    

    return(
        <div>
        <BrowserRouter>

     <All/>
           <Routes>

            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/about' element={<Aboutus/>}></Route>
            <Route exact path='/services' element={<Services/>}></Route>
            <Route exact path='/gallery' element={<Gallery/>}></Route>
            <Route exact path='/contact' element={<Contactsus/>}></Route>
           </Routes>

   
        </BrowserRouter>
        <NDate/>
        <Statedata/>

        <FirstName.Provider  value={'Hemant'}>
         <LastName.Provider value = {'Arora'}>

        <ComA/>
         </LastName.Provider>
        </FirstName.Provider>

        <Effect/>

        <Ref/>

        <Useref/>
        </div>
    )

}
 export default Demo;