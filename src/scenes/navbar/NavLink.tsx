import { Link } from 'react-router-dom';

type Props = {
  page:string;
  selectedPage:string;
  setSelectedPage:(value:string) => void;
}

const NavLink = ({
  page,
  selectedPage,
  setSelectedPage
}: Props) => {

  const lowerCasePage = page.toLowerCase().replace(/ /g, "");

  return (
    <Link
      to={`/${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${selectedPage == lowerCasePage ? "border-b-2" : ""}`}
      >
        {page}
    </Link>
  )
}

export default NavLink;