import './App.css';
import Popular from './Components/Popular';
import { GlobalContextProvider, useGlobalContext } from './context/global';
import GlobalStyle from './GlobalStyle';

function App() {
  
  const global = useGlobalContext()


  return (
    <div className="App">
      <GlobalContextProvider>
        <Popular/>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
