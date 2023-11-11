import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import DestinationDetails from "./Pages/DestinationDetails";
import About from "./Components/About";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Toaster } from "react-hot-toast";
import Destination from "./Components/Destination";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination-details" element={<DestinationDetails />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
