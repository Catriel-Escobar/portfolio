import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AppPrincipal from "./layout/AppPrincipal";
// import AboutMe from "./pages/AboutMe";
// import BackEnd from "./pages/BackEnd";
// import FrontEnd from "./pages/FrontEnd";
import { lazy, useEffect } from "react";
const About = lazy(() => import("./pages/AboutMe"));
const Back = lazy(() => import("./pages/BackEnd"));
const Front = lazy(() => import("./pages/FrontEnd"));


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};


export default function Router() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route element={<AppPrincipal />}>
          <Route path="/" element={<About />} />
          <Route path="/back" element={<Back />} />
          <Route path="/front" element={<Front />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
