import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Popular from './Components/Popular';
import { GlobalContextProvider, useGlobalContext } from './context/global';
import GlobalStyle from './GlobalStyle';

function App() {
  
  const global = useGlobalContext()


  return (
    <BrowserRouter>
      <div className="App">
        <Popular/>
      </div>
    </BrowserRouter>
  );
}

export default App;
