import "./App.scss";
import Header from "./components/Header/Header";
import Brands from "./pages/Brands/Brands";
import FullCard from "./pages/FullICard/FullCard";
import Home from "./pages/Home/Home.tsx";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import SearchResult from "./pages/SearchResult/SearchResult";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="*" element={<NotFound />} />
        <Route path="" element={<Home />} />
        <Route path="/designers" element={<Brands />} />
        <Route path="/collections/:link" element={<Home />} />
        <Route path="/items/:id" element={<FullCard />} />
        <Route path="/search/:query" element={<SearchResult />} />
      </Route>
    </Routes>
  );
}

export default App;
