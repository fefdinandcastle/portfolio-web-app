import './App.css';
import { Content } from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import "./styles/globals.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/>
    </div>
  );
}

export default App;
