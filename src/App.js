import './App.css';
import { Toggle } from './components/Toggle';
import { DropDown } from './components/Dropdown';
import { Input } from './components/Input';
import { Slider } from './components/Slider';
import { Tab } from './components/Tab';


function App() {
  return (
    <div className="App">
      <Tab />
      <DropDown />
      <Input />
      <Slider />
      <Toggle />
    </div>
  );
}



export default App;
