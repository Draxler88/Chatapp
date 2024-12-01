import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/Maine";
import Register from "./components/Register";
import Login from "./components/Login";
import Chat from "./components/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="Register" element={<Register />} />
        <Route path="Login" element={<Login />} />
        <Route path="Accuille" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
