import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";
import NotFound from "../components/Error/NotFound";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const PageLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;

{/* <div>ROUTER</div> */}
{/* <Routes>
  <Route exact path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<NotFound />} />
</Routes> */}