import './App.css';
import {Route, Routes} from'react-router-dom';
import {ProfilePage, OrgPage, Login, Home ,AccountSettings, Events, SignUp, UserHomePage} from './pages/PagesLayout';


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
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/home/:id" element={<UserHomePage />} /> */}
    </Routes>
    </>
  );
}

export default App;
