import './App.scss';
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Card from "./components/cards/Card"
import {data} from "./helper/data"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Card data={data}/>
    </div>
  );
}

export default App;
