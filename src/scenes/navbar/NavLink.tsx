import { Link } from 'react-router-dom';

type Props = {
  page:string;
  setMobileNavIsOpen:(value:boolean) => void;
  backgroundImageColor:string;
}

const NavLink = ({
  page,
  setMobileNavIsOpen,
  backgroundImageColor
}: Props) => {

  const lowerCasePage = page.toLowerCase().replace(/ /g, "");

  return (
    <Link
      to={`/${lowerCasePage}`}
      onClick={() => {
        setMobileNavIsOpen(false);
      }}
      className={`${backgroundImageColor == "black" ? "text-white" : "text-black"}`}
      >
        {page}
    </Link>
  )
}

export default NavLink;