import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Photos from './components/Photos';
import PhotoState from './context/photos/PhotoState';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [query, setQuery] = useState("");

  return (
    <PhotoState>
      <div>
        <BrowserRouter>
          <Navbar query={query} setQuery={setQuery}/>
          <Routes>
            <Route exact path='/' element={<Photos category={'random'} title={'Random'} key='random'/>} />
            <Route exact path='/architecture' element={<Photos category={'architecture'} title={'Architectural'} key='architecture' />} />
            <Route exact path='/nature' element={<Photos category={'nature'} title={'Natural'} key='nature'/>} />
            <Route exact path='/abstract' element={<Photos category={'abstract'} title={'Abstract'} key='abstract'/>} />
            <Route exact path='/technology' element={<Photos category={'technology'} title={'Technological'} key='technolo'/>} />
            <Route exact path='/search' element={<Photos category={query} title={query} key='search'/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </PhotoState>
  );
}

export default App;
