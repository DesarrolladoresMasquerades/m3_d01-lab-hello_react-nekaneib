// src/App.js
import './App.css';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Gallery from "./components/Gallery"


function App() {
  return (
    <div className="App">
      <Navbar />

      <Header />
      <Gallery />
    </div>
  );
}
export default App;