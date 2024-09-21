import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./scenes/navbar";
import Home from "./pages/Home";



function App() {

  const [selectedPage, setSelectedPage] = useState<string>('home');

  return(
    <div className="app">
      <BrowserRouter>
          <Navbar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          {/* <Routes>
            <Route path="/" element={<Home />} />
          </Routes> */}
      </BrowserRouter>
    </div>
  )
}

export default App;
