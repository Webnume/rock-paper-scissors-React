import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { Routes, Route, MemoryRouter } from "react-router-dom";
import Battle from "./components/Battle/Battle";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <MemoryRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/battle" element={<Battle />} />
        </Routes>
        <Footer />
      </MemoryRouter>
    </div>
  );
}

export default App;
