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
        <Route path="/:designers" element={<Brands />} />
        <Route path="/collections/:designer" element={<Home />} />  {/*designer*/}
        <Route path="/collection/:sex" element={<Home />} />
        <Route path="/:category" element={<Home />} />
        <Route path="/:sex/:category" element={<Home />} />
        <Route path="/products/:id" element={<FullCard />} />
        <Route path="/search/:query" element={<SearchResult />} /> {/*searching*/}
      </Route>
    </Routes>
  );
}

export default App;
