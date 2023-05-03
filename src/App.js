import React from 'react';
import context from './context';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Pokemones from './pages/Pokemones.jsx'
import Navbar from './components/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetallePokemon from './pages/DetallePokemon';



function App() {

  const [pokemons, setPokemons] = useState([])


  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) =>
        setPokemons(data.results)
      );

  }, []);

  const globalState = { pokemons, setPokemons };

  return (

    <context.Provider value={globalState}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemones' element={<Pokemones />} />
          <Route path='/detallePokemon' element={<DetallePokemon />} />
        </Routes>
      </BrowserRouter>
    </context.Provider>

  );
}

export default App;
