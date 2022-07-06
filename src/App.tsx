import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Battle from "./components/Battle/Battle";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/main" element={<Main />} />
            <Route path="/battle" element={<Battle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;