import logo from './logo.svg';
import './App.css';
import BackgroundLayer from './components/BackgroundLayer';
import LockScreen from './components/LockScreen';
import { useState } from 'react';

function App() {

  const [screen,setScreen] = useState(0);

  return (
    <div className="App">
      {screen ? <BackgroundLayer setScreen={setScreen} /> : <LockScreen setScreen={setScreen}/>}
      
    </div>
  );
}

export default App;
