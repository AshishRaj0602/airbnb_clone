import "./App.css";
import Header from "./components/homepage/Header";
import Home from "./components/homepage/Home";
import Footer from "./components/homepage/Footer";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./components/searchpage/SearchPage";
function App() {
  return (
    <div className="App">
        <Header />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/search" element={<SearchPage />}></Route>
      {/* <Route path="/" element={<Home />}></Route> */}
        {/* Home */}
        {/* Header */}

        {/* Banner */}
        {/* Search */}

        {/* Fotter */}

        {/* SearchPage */}
      </Routes>
        <Footer />
    </div>
  );
}

export default App;
