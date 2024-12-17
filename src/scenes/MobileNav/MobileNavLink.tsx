import { Link } from 'react-router-dom';

type Props = {
  page:string;
  setMobileNavIsOpen:(value:boolean) => void;
}

const MobileNavLink = ({
  page,
  setMobileNavIsOpen
}: Props) => {

  const lowerCasePage = page.toLowerCase().replace(/ /g, "");

  return (
    <Link
      to={`/${lowerCasePage}`}
      onClick={() => {
        setMobileNavIsOpen(false);
      }}
      className={`px-5 py-3 bg-amber-50 w-fit text-black text-sm tracking-widest opacity-85`}
      >
        {page}
    </Link>
  )
}

export default MobileNavLink;