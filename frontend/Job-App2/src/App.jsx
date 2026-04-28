import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Jobs from "./pages/Jobs";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Jobs />} />
        <Route path="/Jobs" element={<Jobs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
