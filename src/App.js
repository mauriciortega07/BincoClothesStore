import UserAcces from "./components/UserAcces";
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserAcces/>} />
      </Routes>
    </div>
  );
}

export default App;
