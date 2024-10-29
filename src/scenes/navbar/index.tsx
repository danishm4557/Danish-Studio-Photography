import NavLink from './NavLink';
import { Link } from 'react-router-dom';
import PngLogo from '../../assets/Danish-Studio-Logo-Black.png';



type Props = {
	selectedPage:string;
	setSelectedPage:(value:string) => void;
	setPreviousPage:(value:string) => void;
	isAboveSmallScreens:boolean;
	isAboveMediumScreens:boolean;
	isAboveLargeScreens:boolean;
	setMobileNavIsOpen:(value:boolean) => void;
}

const Navbar = ({ selectedPage, setSelectedPage, setPreviousPage, isAboveSmallScreens, isAboveMediumScreens, isAboveLargeScreens, setMobileNavIsOpen}: Props) => {

	const flexBetween: string = isAboveLargeScreens ? "flex items-center justify-between gap-8 karla-300 w-1/4 z-10" : isAboveMediumScreens ? "flex items-center justify-between gap-16 karla-300 w-1/3 z-10" : "flex flex-col justify-between gap-2 karla-300 w-1/3 z-10";

  return <>
	{
		// MOBILE NAV
		!isAboveSmallScreens ?
		<div className="flex items-center justify-end w-full p-5 text-sm">
			<div className="flex items-center justify-center w-1/3">
				<Link to="/" onClick={() => setSelectedPage('home')} className="flex justify-center">
					<img src={PngLogo} alt="Danish Studio Photography Logo" className="w-full border border-black p-[2px] rounded-full" style={{maxWidth: "120px"}} />
				</Link>
			</div>
			<div className="w-1/3 flex justify-end">
				<Link to="/navigation" onClick={() => {
					setPreviousPage(selectedPage);
					setSelectedPage('navigation');
					setMobileNavIsOpen(true);
				}
				}>
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
				<NavLink page="ABOUT" selectedPage={selectedPage} setSelectedPage={setSelectedPage} setMobileNavIsOpen={setMobileNavIsOpen} />
				<NavLink page="WELCOME" selectedPage={selectedPage} setSelectedPage={setSelectedPage} setMobileNavIsOpen={setMobileNavIsOpen} />
				<NavLink page="INVESTMENT" selectedPage={selectedPage} setSelectedPage={setSelectedPage} setMobileNavIsOpen={setMobileNavIsOpen} />

			</div>
			<div className="flex items-center justify-center w-1/3">
				<Link to="/" onClick={() => setSelectedPage('home')} className="flex justify-center">
					<img src={PngLogo} alt="Danish Studio Photography Logo" className="w-1/2 border border-black p-[2px] rounded-full z-10" style={{maxWidth: "275px"}} />
				</Link>
			</div>
			<div className={`${flexBetween} items-end`}>
				<NavLink page="BLOG" selectedPage={selectedPage} setSelectedPage={setSelectedPage} setMobileNavIsOpen={setMobileNavIsOpen} />
				<NavLink page="BOOK ME" selectedPage={selectedPage} setSelectedPage={setSelectedPage} setMobileNavIsOpen={setMobileNavIsOpen} />
				<NavLink page="GALLERY" selectedPage={selectedPage} setSelectedPage={setSelectedPage} setMobileNavIsOpen={setMobileNavIsOpen} />
			</div>
		</div>
	}
  </>
}

export default Navbar