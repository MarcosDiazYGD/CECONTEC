import { HashRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SearchCountry from "./components/SearchCountry";
import Tips from "./components/Tips";

function App() {

  return (
    <HashRouter >
      <div className="App">
        <nav className="navBar">
          <ul>
            <li>
              <Link className={'anchors'} to='/'>Home</Link >
            </li>
            <li>
              <Link className={'anchors'} to='/searchcountry'>Search Country</Link>
            </li>
            <li>
              <Link className={'anchors'} to='/tips'>Tips</Link>
            </li>
          </ul>
        </nav>

        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/searchcountry" element={<SearchCountry />} />
          <Route path="/tips" element={<Tips />} />
        </Routes>

      </div>
    </HashRouter>

  ); np
}

export default App;
