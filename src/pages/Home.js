import { Route, Routes } from 'react-router-dom';
import All from './HomeNav/All';
import Gaming from './HomeNav/Gaming';
import Thoughts from './HomeNav/Thoughts';
import Music from './HomeNav/Music';
import Thrillers from './HomeNav/Thrillers';
import Mixes from './HomeNav/Mixes';
import Avatar from './HomeNav/Avatar';
import FilmCriticisma from './HomeNav/FilmCriticisma';
import KoreanDramas from './HomeNav/KoreanDramas';
import Characters from './HomeNav/Characters';
import Eating from './HomeNav/Eating';
import Navbar from '../components/Navbar';

import mic from '../assets/Mic.png';
import search from '../assets/Search.png';

function Home() {
  return (
    <div className="main">
     <div className="header  d-flex">
     <form className='search'> 
        <img src={search} alt="search-icon"  id='search-icon'/>
        <input type="text" placeholder='Explore'></input>
        <img src={mic} alt="speak search"  id='speaker-icon'/>
      </form>
       <Navbar />
     </div>
      <Routes>
        <Route index element={<All />} />
        <Route path="/Gaming" element={<Gaming />} />
        <Route path="/Thoughts" element={<Thoughts />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Thrillers" element={<Thrillers />} />
        <Route path="/Mixes" element={<Mixes />} />
        <Route path="/Avatar" element={<Avatar />} />
        <Route path="/FilmCriticisma" element={<FilmCriticisma />} />
        <Route path="/KoreanDramas" element={<KoreanDramas />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/Eating" element={<Eating />} />
      </Routes>
    </div>
  );
}

export default Home;