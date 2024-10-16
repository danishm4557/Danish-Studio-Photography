import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./scenes/navbar";
import MobileNav from "./scenes/MobileNav";
import useMediaQuery from "./hooks/useMediaQuery";
import Footer from "./scenes/footer";



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
    <BrowserRouter>
      {
        mobileNavIsOpen == true ?
        <div className="app mobile-navigation-open">
          <MobileNav
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            previousPage={previousPage}
            isAboveSmallScreens={isAboveSmallScreens}
            setMobileNavIsOpen={setMobileNavIsOpen}
          />
        </div>
        :
        <div className="app">
          <Navbar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setPreviousPage={setPreviousPage}
            isAboveSmallScreens={isAboveSmallScreens}
            isAboveMediumScreens={isAboveMediumScreens}
            isAboveLargeScreens={isAboveLargeScreens}
            setMobileNavIsOpen={setMobileNavIsOpen}

          />
          <Footer setSelectedPage={setSelectedPage} setMobileNavIsOpen={setMobileNavIsOpen} />
        </div>

      /* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */
      }
    </BrowserRouter>
  )
}

export default App;
