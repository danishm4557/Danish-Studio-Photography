import { BackgroundImageCarousel } from "./backgroundImageCarousel";
import BeautifulPlaceImage from "./beautifulPlaceImage";
import Followmeoninsta from "./followmeoninsta"
import Welcome from "./welcome"
import Whatmyclientssay from "./whatmyclientssay"

type Props = {
  setSelectedPage: (value: string) => void;
  setCarouselImageColor: (value: string) => void;
}

const Home = ({setSelectedPage, setCarouselImageColor}:Props) => {
  return (
    <>
        <div className="hidden sm:block w-[100%] h-[100%]"></div>
        <BackgroundImageCarousel setCarouselImageColor={setCarouselImageColor} />
        <Welcome setSelectedPage={setSelectedPage} />
        <BeautifulPlaceImage />
        <Whatmyclientssay />
        <Followmeoninsta />
    </>
  )
}

export default Home