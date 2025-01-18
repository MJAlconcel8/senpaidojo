import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Popular from './Components/Popular';
import AnimeItem from './Components/AnimeItem';
import { GlobalContextProvider, useGlobalContext } from './context/global';
import GlobalStyle from './GlobalStyle';

function App() {
  
  const global = useGlobalContext()


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Popular/>}/>
        <Route path="/anime/:id" element={<AnimeItem/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
