import { useContext } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import NavComponent from "./components/Navbar";
import { AuthContext } from "./context/AuthContext";
import ArticleDetail from "./pages/ArticleDetail";
import DataPengaduan from "./pages/DataPengaduan";
import Home from "./pages/Home";
import Kategori from "./pages/Kategori";
import LoginUser from "./pages/LoginUser";
import Pengaduan from "./pages/Pengaduan";
import Register from "./pages/Register";
import Footbar from "./components/Footbar";
import "./index.css";
import Organik from "./pages/Organik";
import Anorganik from "./pages/Anorganik";
import B3 from "./pages/B3";
import ArticlePage from "./pages/ArticlePage";

function App() {
  const location = useLocation();
  const show = !["/register", "/login"].includes(location.pathname);
  const { isLoggedIn, currentUser } = useContext(AuthContext);

  return (
    <>
      {show && <NavComponent />}
      <Routes>
        <Route path="/kategori/organik" element={<Organik/>} />
        <Route path="/kategori/anorganik" element={<Anorganik/>} />
        <Route path="/kategori/b3" element={<B3/>} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/kategori/" element={<Kategori />} />
        <Route path="/articles" element={<ArticlePage />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/pengaduan" element={isLoggedIn && currentUser.role === "user" ? <Pengaduan /> : <Navigate replace to={"/login"} state={{ navigateTo: "/pengaduan" }} />} />
        <Route path="/data-pengaduan" element={isLoggedIn && currentUser.role === "admin" ? <DataPengaduan /> : <Navigate replace to={"/login"} />} />
      </Routes>
      {show && <Footbar />}
    </>
  );
}

export default App;
