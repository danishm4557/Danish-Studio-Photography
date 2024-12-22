import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Navbar from "./scenes/navbar";
import MobileNav from "./scenes/MobileNav";
import useMediaQuery from "./hooks/useMediaQuery";
import Footer from "./scenes/footer";
import LandingPageImage from "./scenes/LandingPageImage";
import Home from "./pages/Home";
import Investment from "./pages/Investment";
import BookMe from "./pages/BookMe";
import FAQ from "./pages/FAQ";
import Pricing from "./pages/Pricing";
import Gallery from "./pages/Gallery";
import favIcon from '../public/favicon.ico'



function App() {

  // viewports
  const isAboveSmallScreens = useMediaQuery("(min-width: 767px)");
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
	const isAboveLargeScreens = useMediaQuery("(min-width: 1200px)");

  // page selections
  const [selectedPage, setSelectedPage] = useState<string>('home');
  const [previousPage, setPreviousPage] = useState<string>('home');

  // open or automatically close mobile nav on screen resize to large
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState<boolean>(false);

  // set nav links color on each page and also update with each image on BackgroundImageCarousel on home page
  const [navLinksColor, setNavLinksColor] = useState('black');


  return(
    <div className="app">
      <Helmet>
        <title>Danish Studio Photography</title>
        <meta property="og:title" content="Danish Studio Photography"></meta>
        <meta name="description" content="HERE FOR LIFE'S FEEL GOOD MOMENTS" />
        <meta property="og:description" content="HERE FOR LIFE'S FEEL GOOD MOMENTS"></meta>
        <link rel="icon" type="image/png" href={favIcon} sizes="16x16" />
        <meta property="og:image" content={favIcon} />
      </Helmet>
      {/* to display different landing page image on each of these pages */}
      {
        selectedPage == 'investment' ?
          <LandingPageImage selectedPage={selectedPage} />
        :
        selectedPage == 'bookme' ?
          <LandingPageImage selectedPage={selectedPage} />
        :
        selectedPage == 'gallery' ?
          <LandingPageImage selectedPage={selectedPage} />
        :
          ''
      }
      <BrowserRouter>
        {
          mobileNavIsOpen == true ?
            <MobileNav
              setSelectedPage={setSelectedPage}
              previousPage={previousPage}
              isAboveSmallScreens={isAboveSmallScreens}
              setMobileNavIsOpen={setMobileNavIsOpen}
            />
          :
          <>
          <Navbar
              selectedPage={selectedPage}
              setPreviousPage={setPreviousPage}
              isAboveSmallScreens={isAboveSmallScreens}
              isAboveMediumScreens={isAboveMediumScreens}
              isAboveLargeScreens={isAboveLargeScreens}
              setMobileNavIsOpen={setMobileNavIsOpen}
              navLinksColor={navLinksColor}
            />
            <Routes>
              {/* 404 PAGE - AUTO REDIRECT TO HOME PAGE */}
              <Route path="*" element={<Home setSelectedPage={setSelectedPage} setNavLinksColor={setNavLinksColor} />} />
              {/* HOME PAGE */}
              <Route path="/" element={<Home setSelectedPage={setSelectedPage} setNavLinksColor={setNavLinksColor} />} />
              <Route path="/home" element={<Home setSelectedPage={setSelectedPage} setNavLinksColor={setNavLinksColor} />} />
              <Route path="/welcome" element={<Home setSelectedPage={setSelectedPage} setNavLinksColor={setNavLinksColor} />} />
              {/* INVESTMENT PAGE */}
              <Route path="/investment" element={<Investment setSelectedPage={setSelectedPage} setNavLinksColor={setNavLinksColor} />} />
              {/* BOOK ME PAGE */}
              <Route path="/bookme" element={<BookMe setSelectedPage={setSelectedPage} setNavLinksColor={setNavLinksColor} />} />
              {/* FAQ PAGE */}
              <Route path="/faq" element={<FAQ setSelectedPage={setSelectedPage} setNavLinksColor={setNavLinksColor} />} />
              {/* PRICING PAGE */}
              <Route path="/pricing" element={<Pricing setSelectedPage={setSelectedPage} setNavLinksColor={setNavLinksColor} />} />
              {/* GALLERY PAGE */}
              <Route path="/gallery" element={<Gallery setSelectedPage={setSelectedPage} setNavLinksColor={setNavLinksColor} />} />
            </Routes>
            <Footer />
          </>
        }
      </BrowserRouter>
    </div>
  )
}

export default App;
