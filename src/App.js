import './App.scss';
import Header from './components/Header/Header';
import Brands from './pages/Brands/Brands';
import Home from './pages/Home/Home.tsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/designers' element={<Brands/>}/>
        </Routes>
    </div>
  );
}

export default App;
