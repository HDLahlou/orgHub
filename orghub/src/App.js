import './App.css';
import {Route, Routes} from'react-router-dom';
import {ProfilePage, OrgPage, Login, Home ,AccountSettings, Events} from './pages/PagesLayout';


function App() {
  return (
    <>
    <h1>╰། ◉ ◯ ◉ །╯ HUB</h1>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/org" element={<OrgPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account-settings" element={<AccountSettings />} />
      <Route path="/events" element={<Events />} />
    </Routes>
    </>
  );
}

export default App;
