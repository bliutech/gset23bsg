import logo from "./assets/logo.svg";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Contribute from "./pages/ContributePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contribute" element={<Contribute />} />s
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
