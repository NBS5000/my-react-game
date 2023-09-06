import './css/App.css';
import Person from './modules/Person';
import MobKeypad from './modules/MobKeypad';
import {isMobile} from 'react-device-detect';

function App() {
  return (
    <div className="App">
      <Person />

      {isMobile?(<><MobKeypad /></>):<></>}
    </div>
  );
}

export default App;
