import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { AboutMe } from './AboutMe';
import { MyTown } from './MyTown';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div>
        <ul className="Header">
          <li>
            <Link to="/" className="links">AboutMe</Link>
          </li>
          <li>
            <Link to="myTown"className="links">MyTown</Link>
          </li>
        </ul>
        <hr/>
        </div>
    </div>
    <Routes>
        <Route path="/" element={<AboutMe/>}/>
				<Route exact path="/myTown" element={<MyTown/>}/>
    </Routes>
    
    </BrowserRouter>
  
  );
}

export default App;
