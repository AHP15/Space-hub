import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import NavBar from './components/NavBar';
import Store from './slices/store';
import MessionList from './components/MessionList';

function App() {
  return (
    <Provider store={Store}>
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
    </Provider>
  );
}

export default App;
