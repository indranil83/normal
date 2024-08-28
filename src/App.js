
import './App.css';
import Person from './components/person';
import Demo from './components/demo';
function App() {
  return (
    <div className='App'>
      <Demo number="1"/>
       <Person name="indranil"></Person>
       <Demo number="2"/>
       <Person name="arpita"></Person>
       
      
    </div>
  );
}

export default App;
