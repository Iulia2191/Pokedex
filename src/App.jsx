import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Pokedex from "./componets/Pokedex";
import Search from "./componets/SEarch"
import Pokemon from "./componets/Pokemon";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>Pokedex</h1>
          <nav>
            <Link to="/">Pokedex</Link>
            <Link to="/search">Search</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/search" element={<Search />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
