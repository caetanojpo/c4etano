import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Experiences from "../pages/experiences/Experiences";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/experiencias" element={<Experiences />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/contato" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
