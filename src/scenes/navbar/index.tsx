import NavLink from './NavLink';
import { Link } from 'react-router-dom';
import PngLogoBlack from '../../assets/Danish-Studio-Logo-Black.png';
import PngLogoWhite from '../../assets/Danish-Studio-Logo-White.png';
import { motion } from "framer-motion";



type Props = {
	selectedPage:string;
	setSelectedPage:(value:string) => void;
	setPreviousPage:(value:string) => void;
	isAboveSmallScreens:boolean;
	isAboveMediumScreens:boolean;
	isAboveLargeScreens:boolean;
	setMobileNavIsOpen:(value:boolean) => void;
	carouselImageColor:string;
}

const Navbar = ({ selectedPage, setSelectedPage, setPreviousPage, isAboveSmallScreens, isAboveMediumScreens, isAboveLargeScreens, setMobileNavIsOpen, carouselImageColor}: Props) => {

	const flexBetween: string = isAboveLargeScreens ? "flex items-center justify-between gap-8 karla-300 w-1/4 z-10" : isAboveMediumScreens ? "flex items-center justify-between gap-16 karla-300 w-1/3 z-10" : "flex flex-col justify-between gap-2 karla-300 w-1/3 z-10";

	const navLinkTransition = {
		hidden: { opacity: 0 },
		show: {
		  opacity: 1,
		  transition: {
			duration: 2
		  }
		}
	  }

  return <>
	{
		// MOBILE NAV
		!isAboveSmallScreens ?
		<div className="flex items-center justify-end w-full p-5 text-sm">
			<div className="flex items-center justify-center w-1/3">
				<Link to="/" onClick={() => setSelectedPage('home')} className="flex justify-center">
					{
						!isAboveSmallScreens ?
							(<img src={PngLogoBlack} alt="Danish Studio Photography Logo" className="w-full border border-black p-[2px] rounded-full" style={{maxWidth: "120px"}} />)
						:
							(carouselImageColor == 'black' ?
							<img src={PngLogoWhite} alt="Danish Studio Photography Logo" className="w-full border border-white p-[2px] rounded-full" style={{maxWidth: "120px"}} />
							:
							<img src={PngLogoBlack} alt="Danish Studio Photography Logo" className="w-full border border-black p-[2px] rounded-full" style={{maxWidth: "120px"}} />)
					}
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
			<motion.div className={`${flexBetween} items-start`}
			variants={navLinkTransition}
    		initial="hidden"
    		animate="show">
				<NavLink page="ABOUT" selectedPage={selectedPage} setSelectedPage={setSelectedPage} setMobileNavIsOpen={setMobileNavIsOpen} carouselImageColor={carouselImageColor} />
				<NavLink page="WELCOME" selectedPage={selectedPage} setSelectedPage={setSelectedPage} setMobileNavIsOpen={setMobileNavIsOpen} carouselImageColor={carouselImageColor} />
				<NavLink page="INVESTMENT" selectedPage={selectedPage} setSelectedPage={setSelectedPage} setMobileNavIsOpen={setMobileNavIsOpen} carouselImageColor={carouselImageColor} />
			</motion.div>
			<div className="flex items-center justify-center w-1/3">
				<Link to="/" onClick={() => setSelectedPage('home')} className="flex justify-center">
					{
						carouselImageColor == 'black' ?
						<motion.img variants={navLinkTransition}
						initial="hidden"
						animate="show"
						src={PngLogoWhite} alt="Danish Studio Photography Logo" className="w-1/2 border border-white p-[2px] rounded-full z-10" style={{maxWidth: "275px"}} />
						:
						<motion.img variants={navLinkTransition}
						initial="hidden"
						animate="show"
						src={PngLogoBlack} alt="Danish Studio Photography Logo" className="w-1/2 border border-black p-[2px] rounded-full z-10" style={{maxWidth: "275px"}} />
					}
				</Link>
			</div>
			<motion.div className={`${flexBetween} items-end`}
			variants={navLinkTransition}
    		initial="hidden"
    		animate="show">
				<NavLink page="BLOG" selectedPage={selectedPage} setSelectedPage={setSelectedPage} setMobileNavIsOpen={setMobileNavIsOpen} carouselImageColor={carouselImageColor} />
				<NavLink page="BOOK ME" selectedPage={selectedPage} setSelectedPage={setSelectedPage} setMobileNavIsOpen={setMobileNavIsOpen} carouselImageColor={carouselImageColor} />
				<NavLink page="GALLERY" selectedPage={selectedPage} setSelectedPage={setSelectedPage} setMobileNavIsOpen={setMobileNavIsOpen} carouselImageColor={carouselImageColor} />
			</motion.div>
		</div>
	}
  </>
}

export default Navbar