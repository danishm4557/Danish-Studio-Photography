import { BackgroundImageCarousel } from "./backgroundImageCarousel";
import BeautifulPlaceImage from "./beautifulPlaceImage";
import Followmeoninsta from "./followmeoninsta"
import Welcome from "./welcome"
import Whatmyclientssay from "./whatmyclientssay"

type Props = {
  setSelectedPage: (value: string) => void;
  setbackgroundImageColor: (value: string) => void;
}

const Home = ({setSelectedPage, setbackgroundImageColor}:Props) => {

  setSelectedPage('home');

  return (
    <>
        <div className="hidden sm:block w-[100%] h-[100%]"></div>
        <BackgroundImageCarousel setbackgroundImageColor={setbackgroundImageColor} />
        <Welcome />
        <BeautifulPlaceImage />
        <Whatmyclientssay />
        <Followmeoninsta />
    </>
  )
}

export default Home