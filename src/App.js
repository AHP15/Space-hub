import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';

import { fetchMissions } from './slices/MessionSlice';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import NavBar from './components/NavBar';
import MessionList from './components/MessionList';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchMissions());
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="missions" element={<MessionList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
