import './App.css';
import MainComponentTwo from './Components/MainComponentTwo'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <MainComponentTwo />
    </div>
    </BrowserRouter>
  );
}

export default App;
