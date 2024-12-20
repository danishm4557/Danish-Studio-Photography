import { Link } from 'react-router-dom';

type Props = {
  page:string;
  setMobileNavIsOpen:(value:boolean) => void;
  navLinksColor:string;
}

const NavLink = ({
  page,
  setMobileNavIsOpen,
  navLinksColor
}: Props) => {

  const lowerCasePage = page.toLowerCase().replace(/ /g, "");

  return (
    <Link
      to={`/${lowerCasePage}`}
      onClick={() => {
        setMobileNavIsOpen(false);
      }}
      className={`text-${navLinksColor}`}
      >
        {page}
    </Link>
  )
}

export default NavLink;