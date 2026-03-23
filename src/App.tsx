
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { PageTransition } from "@/components/PageTransition";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import About from "./pages/About";
import ArticleDetail from "./pages/ArticleDetail";

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <>
      <Navigation />
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition direction="fade" duration={400}>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/articles"
          element={
            <PageTransition direction="up" duration={400}>
              <Articles />
            </PageTransition>
          }
        />
        <Route
          path="/article/:id"
          element={
            <PageTransition direction="right" duration={400}>
              <ArticleDetail />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition direction="left" duration={400}>
              <About />
            </PageTransition>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
