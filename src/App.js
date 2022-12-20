import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import NavBar from './components/NavBar';
import Store from './redux/SpaceStore';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/profile" element={<MyProfile />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
