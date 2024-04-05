import NavBar from "./pages/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Article from "./pages/article";
import ArticlesList from "./pages/articles-list";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/not-found";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/article/:articleId" element={<Article />} />
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
