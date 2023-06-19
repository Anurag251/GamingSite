import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home.page";
import HeaderComponent from "./components/Header.component";
import './styles/main.sass'

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
