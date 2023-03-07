import { BrowserRouter } from "react-router-dom";
import "./app.scss";
// import Footer from "./components/Footer/Footer";
// import Navbar from "./components/Navbar/Navbar";
import Router from "./router/Router";

function App() {
  return (
    // <div>APP</div>
    <BrowserRouter>
      {/* <Navbar /> */}
      <Router />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
