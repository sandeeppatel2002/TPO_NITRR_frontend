import Home from "./pages/home/Home";
import TopBar from "./components/topbar/Tb";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Tpo from "./pages/tpo/Tpo";
import Dsa from "./pages/dsa/Dsa";
import Contact from "./pages/contact/Contact";
import Register from "./pages/register/Register";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Tpo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dsa" element={<Dsa />} />
        <Route path="/contact" element={user ? <Contact /> : <Register />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
