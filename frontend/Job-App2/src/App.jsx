import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Jobs from "./pages/Jobs";
import About from "./pages/About";
import PostJob from "./pages/PostJob";
import { ROUTES } from "./constants/routes";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.JOBS} element={<Jobs />} />
        <Route path={ROUTES.POST_JOB} element={<PostJob />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
