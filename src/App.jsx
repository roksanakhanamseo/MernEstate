import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Listing from "./pages/Listing";
import Search from "./pages/Search";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CreateListing from "./pages/CreateListing";
import Test from "./pages/Test";

const App = () => {
  return (
    <>
      <div className="bg-[#a2b8dbb6]">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-listing" element={<CreateListing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/test" element={<Test />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
            <Route path="/listing/:id" element={<Listing />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
