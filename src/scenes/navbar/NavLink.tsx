import { Link } from 'react-router-dom';

type Props = {
  page:string;
  selectedPage:string;
  setSelectedPage:(value:string) => void;
  setMobileNavIsOpen:(value:boolean) => void;
  carouselImageColor:string;
}

const NavLink = ({
  page,
  selectedPage,
  setSelectedPage,
  setMobileNavIsOpen,
  carouselImageColor
}: Props) => {

  const lowerCasePage = page.toLowerCase().replace(/ /g, "");

  return (
    <Link
      to={`/${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        setMobileNavIsOpen(false);
      }}
      className={`${carouselImageColor == "black" ? "text-white" : "text-black"} ${selectedPage == lowerCasePage ? "border-b-2" : ""}`}
      >
        {page}
    </Link>
  )
}

export default NavLink;