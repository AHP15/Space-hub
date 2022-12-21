import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchMissions } from './slices/MessionSlice';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import NavBar from './components/NavBar';
import MessionList from './components/MessionList';
import { getRockets } from './slices/RocketSlice';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  const { messions } = useSelector((state) => state.missions);
  useEffect(() => {
    if (messions.length <= 2 && location.pathname === '/missions') {
      dispatch(fetchMissions());
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/missions" element={<MessionList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
