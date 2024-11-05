import React from "react";
import { Routes, Route } from "react-router-dom";
import InteractiveScroll from "./components/section1/InteractiveScroll";
import CardGrid from "./components/section2/CardGrid";
import PhysicsEllipse from "./components/section3/PhysicsEllipse";
import "./App.scss";
import Work1 from "./pages/work1/Work1";
import Work2 from "./pages/work2/Work2";
import Work3 from "./pages/work3/Work3";
import Work4 from "./pages/work4/Work4";
import Work5 from "./pages/work5/Work5";
import Project1 from "./pages/work2/project1/Project1";
import Project2 from "./pages/work2/project2/Project2";
import Coex from "./pages/work3/coex/Coex";
import Design from "./pages/work3/design/Design";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/header/Header";

const MainContent = () => {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <InteractiveScroll />
      </div>
      <div>
        <CardGrid />
      </div>
      <section className="section3">
        <PhysicsEllipse />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/machbase" element={<Work1 />} />
        <Route path="/publishing" element={<Work2 />} />
        <Route path="/design" element={<Work3 />} />
        <Route path="/seo" element={<Work4 />} />
        <Route path="/youtube" element={<Work5 />} />
        <Route path="/neo" element={<Project1 />} />
        <Route path="/ssangyoung" element={<Project2 />} />
        <Route path="/coex" element={<Coex />} />
        <Route path="/machdesign" element={<Design />} />
      </Routes>
    </div>
  );
};

export default App;
