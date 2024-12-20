import { BackgroundImageCarousel } from "./backgroundImageCarousel";
import BeautifulPlaceImage from "./beautifulPlaceImage";
import Followmeoninsta from "./followmeoninsta"
import Welcome from "./welcome"
import Whatmyclientssay from "./whatmyclientssay"

type Props = {
  setSelectedPage: (value: string) => void;
  setNavLinksColor: (value: string) => void;
}

const Home = ({setSelectedPage, setNavLinksColor}:Props) => {

  setSelectedPage('home');
  setNavLinksColor('white');

  return (
    <>
        <div className="hidden sm:block w-[100%] h-[100%]"></div>
        <BackgroundImageCarousel setNavLinksColor={setNavLinksColor} />
        <Welcome />
        <BeautifulPlaceImage />
        <Whatmyclientssay />
        <Followmeoninsta />
    </>
  )
}

export default Home