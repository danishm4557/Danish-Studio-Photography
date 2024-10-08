import { Link } from 'react-router-dom';

type Props = {
  page:string;
  selectedPage:string;
  setSelectedPage:(value:string) => void;
  setMobileNavIsOpen:(value:boolean) => void;
}

const NavLink = ({
  page,
  selectedPage,
  setSelectedPage,
  setMobileNavIsOpen
}: Props) => {

  const lowerCasePage = page.toLowerCase().replace(/ /g, "");

  return (
    <Link
      to={`/${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        setMobileNavIsOpen(false);
      }}
      className={`${selectedPage == lowerCasePage ? "border-b-2" : ""} ${selectedPage == 'navigation' ? "px-5 py-3 bg-amber-50 w-fit text-sm tracking-widest opacity-85" : ""}`}
      >
        {page}
    </Link>
  )
}

export default NavLink;