import './App.css';
import LandingContent from './components/LandingContent/LandingContent';
import Navbar from './components/Navbar/Navbar';
import "./styles/globals.css";

function App() {

  console.log(`[App - R]`);

  return (
    <div className="App">
      <Navbar/>
      <LandingContent/>
    </div>
  );
}

export default App;
