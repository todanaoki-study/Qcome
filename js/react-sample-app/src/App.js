import './scss/App.min.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//各素材をインポート
import Header from "./component/header";
import Footer from "./component/footer";
import Home from "./pages/home";
import Chat from "./pages/chat";
import Setting from "./pages/setting";
import Profile from "./pages/profile";

import Slider from "./component/slider";
import Write from "./pages/detail/write"
import WriteChecker from './pages/detail/writeChecker';
import Borrow from "./pages/detail/borrow";

function App() {
  // headerの開く処理
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const toggleSlider = () => {
    setIsSliderOpen(prev => !prev);
    console.log("通過");
  };

  return (
    <Router>
      <Header onToggle={toggleSlider}></Header>
      <Slider isOpen={isSliderOpen} onClose={toggleSlider}></Slider>
      {/* ページ遷移するファイルを宣言 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/write" element={<Write />} />
        <Route path="/writeChecker" element={<WriteChecker />} />
        <Route path="/borrow" element={<Borrow />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;