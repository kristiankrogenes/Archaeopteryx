import logo from './archaeopteryx_img.jpg';
import './App.css';
import TestComponent from './components/TestComponent'; 

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <h1>ARCHAEOPTERYX</h1>

        <img src={logo} className="App-logo" alt="logo" />
        <TestComponent />
      </header>
    </div>
  );
}

export default App;
