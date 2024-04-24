import './App.css';
import Home from './Pages/Home';
import PageTow from './Pages/PageTow';
import InfoPage from './Pages/InfoPage';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pg2' element={<PageTow />} />
        <Route path='/pg3' element={<InfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
