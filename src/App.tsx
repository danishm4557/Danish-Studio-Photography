import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./scenes/navbar";
import MobileNav from "./scenes/MobileNav";
import useMediaQuery from "./hooks/useMediaQuery";
import Footer from "./scenes/footer";
import Home from "./pages/Home";



function App() {

  // viewports
  const isAboveSmallScreens = useMediaQuery("(min-width: 600px)");
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
	const isAboveLargeScreens = useMediaQuery("(min-width: 1200px)");

  // page selections
  const [selectedPage, setSelectedPage] = useState<string>('home');
  const [previousPage, setPreviousPage] = useState<string>('home');

  const [mobileNavIsOpen, setMobileNavIsOpen] = useState<boolean>(false);

  return(
    <div className="app">
      <BrowserRouter>
        {
          mobileNavIsOpen == true ?
            <MobileNav
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              previousPage={previousPage}
              isAboveSmallScreens={isAboveSmallScreens}
              setMobileNavIsOpen={setMobileNavIsOpen}
            />
          :
          <>
          <Navbar
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setPreviousPage={setPreviousPage}
              isAboveSmallScreens={isAboveSmallScreens}
              isAboveMediumScreens={isAboveMediumScreens}
              isAboveLargeScreens={isAboveLargeScreens}
              setMobileNavIsOpen={setMobileNavIsOpen}

            />
            <Routes>
              {/* HOME PAGE */}
              <Route path="/" element={<Home setSelectedPage={setSelectedPage} />} />
              <Route path="/home" element={<Home setSelectedPage={setSelectedPage} />} />
            </Routes>
            <Footer setSelectedPage={setSelectedPage} setMobileNavIsOpen={setMobileNavIsOpen} />
          </>
        }
      </BrowserRouter>
    </div>
  )
}

export default App;
