import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import Details from './components/Details';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { DataProvider } from './components/DataProvider';
import Cart from './components/Cart';

function App() {
  return (
    <DataProvider>
    <div className="App">
     <Router>
      <Header/>
      <section>
        <Routes>
           <Route exact path='/products' element={<Products/>}/>
           <Route exact path='/products/:id' element={<Details/>}/>
           <Route exact path="/cart" element={ <Cart /> } />
        </Routes>
      </section>
    
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
