import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AsideNavbar from './components/AsideNavbar';

import './App.css';

function App() {
  return (
    <div className="App">
       <AsideNavbar />
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
