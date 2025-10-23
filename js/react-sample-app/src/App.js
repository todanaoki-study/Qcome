// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//各素材をインポート
import Header from "./header";
import Footer from "./footer";
import Home from "./pages/home";
import Chat from "./pages/chat";
import Setting from "./pages/setting";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
