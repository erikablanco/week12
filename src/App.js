//import { Search } from './components/Search';
import './App.css';
import { GetData } from './utils/GetData';

function App() {

  GetData();

  return (
    <div className="App">
       <GetData/>
    </div>
  );
}

export default App;
