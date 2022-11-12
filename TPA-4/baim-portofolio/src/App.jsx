import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Portofolio from "./pages/Portofolio";
import About from "./pages/About";
import DetailBlog from "./pages/DetailBlog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<DetailBlog />} />
      </Routes>
    </>
  );
}

export default App;
