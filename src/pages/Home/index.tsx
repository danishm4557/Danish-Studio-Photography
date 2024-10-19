import Followmeoninsta from "./followmeoninsta"
import Welcome from "./welcome"
import Whatmyclientssay from "./whatmyclientssay"

type Props = {
  setSelectedPage: (value: string) => void;
}

const Home = ({setSelectedPage}:Props) => {
  return (
    <>
        <Welcome setSelectedPage={setSelectedPage} />
        <Whatmyclientssay />
        <Followmeoninsta />
    </>
  )
}

export default Home