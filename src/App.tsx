import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./scenes/navbar";
import MobileNav from "./scenes/MobileNav";
import useMediaQuery from "./hooks/useMediaQuery";
import Footer from "./scenes/footer";
import Home from "./pages/Home";



function App() {

  // viewports
  const isAboveSmallScreens = useMediaQuery("(min-width: 767px)");
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
	const isAboveLargeScreens = useMediaQuery("(min-width: 1200px)");

  // page selections
  const [selectedPage, setSelectedPage] = useState<string>('home');
  const [previousPage, setPreviousPage] = useState<string>('home');

  const [mobileNavIsOpen, setMobileNavIsOpen] = useState<boolean>(false);

  // set nav color (black or white) based off carousel image coloring
  const [carouselImageColor, setCarouselImageColor] = useState('black');


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
              carouselImageColor={carouselImageColor}
            />
            <Routes>
              {/* HOME PAGE */}
              <Route path="/" element={<Home setSelectedPage={setSelectedPage} setCarouselImageColor={setCarouselImageColor} />} />
              <Route path="/home" element={<Home setSelectedPage={setSelectedPage} setCarouselImageColor={setCarouselImageColor} />} />
            </Routes>
            <Footer setSelectedPage={setSelectedPage} setMobileNavIsOpen={setMobileNavIsOpen} />
          </>
        }
      </BrowserRouter>
    </div>
  )
}

export default App;
