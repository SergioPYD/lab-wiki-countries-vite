import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";

function App() {
  return (
    <>
    <Navbar/>
    <div className="App">
      

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/:countryId" element={<CountryDetailsPage/>}/>

    </Routes>


    </div>
    </>
  );
}

export default App;
