import { BackgroundImageCarousel } from "./backgroundImageCarousel";
import Followmeoninsta from "./followmeoninsta"
import Welcome from "./welcome"
import Whatmyclientssay from "./whatmyclientssay"

type Props = {
  setSelectedPage: (value: string) => void;
}

const Home = ({setSelectedPage}:Props) => {
  return (
    <>
        <div className="hidden sm:block w-[100%] h-[100%]"></div>
        <BackgroundImageCarousel />
        <Welcome setSelectedPage={setSelectedPage} />
        <Whatmyclientssay />
        <Followmeoninsta />
    </>
  )
}

export default Home