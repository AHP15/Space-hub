import { Route, Routes } from 'react-router-dom';
import './App.css';
import MyProfile from './components/MyProfile';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/profile" element={<MyProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
