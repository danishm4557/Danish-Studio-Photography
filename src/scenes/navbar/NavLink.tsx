import { Link } from 'react-router-dom';

type Props = {
  page:string;
  setSelectedPage:(value:string) => void;
  setMobileNavIsOpen:(value:boolean) => void;
  backgroundImageColor:string;
}

const NavLink = ({
  page,
  setSelectedPage,
  setMobileNavIsOpen,
  backgroundImageColor
}: Props) => {

  const lowerCasePage = page.toLowerCase().replace(/ /g, "");

  return (
    <Link
      to={`/${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        setMobileNavIsOpen(false);
      }}
      className={`${backgroundImageColor == "black" ? "text-white" : "text-black"}`}
      >
        {page}
    </Link>
  )
}

export default NavLink;