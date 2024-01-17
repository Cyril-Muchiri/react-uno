import logo from './logo.svg';
import './App.css';
import Welcome  from './components/Welcome';
import Greetings from './components/Greetings';


function App() {
  return (
    <div className="App">
      
      {/* <Welcome name="Cyril"/>
     <Welcome name="Muchiri" /> */}

<Greetings  name = "Kimani" />
    </div>
  );
}

export default App;
