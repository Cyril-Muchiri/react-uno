import logo from './logo.svg';
import './App.css';
import Welcome  from './components/Welcome';
import Greetings from './components/Greetings';
import Student from './components/Student';
import Employee from  './components/Employee';

function App() {
  return (
    <div className="App">
      
      {/* <Welcome name="Cyril"/>
     <Welcome name="Muchiri" /> */}

{/* <Greetings  name = "Mary" /> */}
{/* <Student
firstName= "Johnteh"
     lastName="Kimaiyu"
     email="kim@test.com" /> */}


     <Employee/>
     

    </div>
  );
}

export default App;
