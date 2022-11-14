import "./App.css";
import AllData from "./components/AllData";
import images from "./assets/images";
import Header from "./components/Header";
import SearchForCountry from "./components/SearchForCountry";

function App() {
  console.log(images);

  return (
    <div className="App">
      <Header />
      <AllData />
      <SearchForCountry />
    </div>
  );
}

export default App;
