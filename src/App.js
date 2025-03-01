import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Popular from './Components/Popular';
import AnimeItem from './Components/AnimeItem';
import { GlobalContextProvider, useGlobalContext } from './context/global';
import Gallery from './Components/Gallery';
import Homepage from './Components/Homepage';
import GlobalStyle from './GlobalStyle';

function App() {
  
  const global = useGlobalContext()


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/anime/:id" element={<AnimeItem/>} />
        <Route path="/character/:id" element={<Gallery/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
