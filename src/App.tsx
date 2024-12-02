import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./scenes/navbar";
import MobileNav from "./scenes/MobileNav";
import useMediaQuery from "./hooks/useMediaQuery";
import Footer from "./scenes/footer";
import Home from "./pages/Home";
import Investment from "./pages/Investment";
import LandingPageImage from "./scenes/LandingPageImage";
import BookMe from "./pages/BookMe";
import FAQ from "./pages/FAQ";
import Pricing from "./pages/Pricing";



function App() {

  // viewports
  const isAboveSmallScreens = useMediaQuery("(min-width: 767px)");
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
	const isAboveLargeScreens = useMediaQuery("(min-width: 1200px)");

  // page selections
  const [selectedPage, setSelectedPage] = useState<string>('home');
  const [previousPage, setPreviousPage] = useState<string>('home');

  const [mobileNavIsOpen, setMobileNavIsOpen] = useState<boolean>(false);

  // set nav color (black or white) based off homepage carousel or other pages' background image coloring
  const [backgroundImageColor, setbackgroundImageColor] = useState('black');


  return(
    <div className="app">
      {
        selectedPage == 'investment' ?
          <LandingPageImage selectedPage={selectedPage} setbackgroundImageColor={setbackgroundImageColor} />
        :
        selectedPage == 'bookme' ?
          <LandingPageImage selectedPage={selectedPage} setbackgroundImageColor={setbackgroundImageColor} />
        :
          ''
      }
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
              backgroundImageColor={backgroundImageColor}
              setbackgroundImageColor={setbackgroundImageColor}
            />
            <Routes>
              {/* HOME PAGE */}
              <Route path="/" element={<Home setSelectedPage={setSelectedPage} setbackgroundImageColor={setbackgroundImageColor} />} />
              <Route path="/home" element={<Home setSelectedPage={setSelectedPage} setbackgroundImageColor={setbackgroundImageColor} />} />
              <Route path="/welcome" element={<Home setSelectedPage={setSelectedPage} setbackgroundImageColor={setbackgroundImageColor} />} />
              <Route path="/investment" element={<Investment setSelectedPage={setSelectedPage} />} />
              <Route path="/bookme" element={<BookMe setSelectedPage={setSelectedPage} />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/pricing" element={<Pricing />} />
            </Routes>
            <Footer setSelectedPage={setSelectedPage} setMobileNavIsOpen={setMobileNavIsOpen} />
          </>
        }
      </BrowserRouter>
    </div>
  )
}

export default App;
