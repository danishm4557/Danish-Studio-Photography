import NavLink from './NavLink';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Danish-Studio.svg';
import useMediaQuery from '../../hooks/useMediaQuery';

type Props = {
	selectedPage:string;
	setSelectedPage:(value:string) => void;
}

const Navbar = ({ selectedPage, setSelectedPage}: Props) => {

	const isAboveSmallScreens = useMediaQuery("(min-width: 600px)");
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
	const isAboveLargeScreens = useMediaQuery("(min-width: 1200px)");
	const flexBetween: string = isAboveLargeScreens ? "flex items-center justify-between gap-8 karla-300 w-1/4" : isAboveMediumScreens ? "flex items-center justify-between gap-16 karla-300 w-1/3" : "flex flex-col justify-between gap-2 karla-300 w-1/3";

  return <>
	{
		// MOBILE NAV
		!isAboveSmallScreens ?
		<div className="flex items-center justify-end w-full p-5 text-sm">
			<div className="flex items-center justify-center w-1/3">
				<Link to="/" onClick={() => setSelectedPage('home')} className="flex justify-center">
					<img src={Logo} alt="Danish Studio Photography Logo" className="w-10/12" style={{maxWidth: "125px"}} />
				</Link>
			</div>
			<div className="w-1/3 flex justify-end">
				<Link to="/navigation" onClick={() => setSelectedPage('navigation')}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>
				</Link>
			</div>
		</div>
		:
		// WVP NAV
		<div className={`flex items-center justify-between w-full px-14 py-7 text-sm gap-3`}>
			<div className={`${flexBetween} items-start`}>
				<NavLink page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
				<NavLink page="Welcome" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
				<NavLink page="Investment" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

			</div>
			<div className="flex items-center justify-center w-1/3">
				<Link to="/" onClick={() => setSelectedPage('home')} className="flex justify-center">
					<img src={Logo} alt="Danish Studio Photography Logo" className="w-1/2" style={{maxWidth: "250px"}} />
				</Link>
			</div>
			<div className={`${flexBetween} items-end`}>
				<NavLink page="Blog" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
				<NavLink page="Book Me" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
				<NavLink page="Gallery" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			</div>
		</div>
	}
  </>
}

export default Navbar