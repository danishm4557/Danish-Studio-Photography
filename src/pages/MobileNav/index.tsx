import { Link } from 'react-router-dom';
import NavLink from '../../scenes/navbar/NavLink';
import { motion } from 'framer-motion';
import backgroundImage from '../../assets/navigation-background-image.jpg';

type Props = {
	selectedPage:string;
	setSelectedPage:(value:string) => void;
	previousPage:string;
	isAboveSmallScreens:boolean;
	setMobileNavIsOpen:(value:boolean) => void;
}


const MobileNav = ({ selectedPage, setSelectedPage, previousPage, isAboveSmallScreens, setMobileNavIsOpen }: Props) => {

	const closeMobileNav = () => {
		setSelectedPage(previousPage);
		setMobileNavIsOpen(false);
	}

  return (<>
  	{
		isAboveSmallScreens ?
			closeMobileNav()
		:
		<motion.div
		id="navigation-motion-div"
		className="flex justify-between pt-12 pl-5 pr-5"
		initial={{ x: "-300px" }}
		animate={{ x: "0px" }}
		// custom insert for background image
		style={{
			backgroundImage: `url(${backgroundImage})`,
			backgroundSize: 'cover', // Adjust as needed
			backgroundPosition: 'center', // Adjust as needed
			height: '100%', // need to set default height
			minHeight: 'calc(100vh-0.4rem)', // Ensure the background covers the entire viewport except custom borders set in index.css
		  }}
		>
			<div className="flex flex-col gap-2">
				<NavLink page="ABOUT" selectedPage={selectedPage} setSelectedPage={setSelectedPage} setMobileNavIsOpen={setMobileNavIsOpen} />
				<NavLink page="WELCOME" selectedPage={selectedPage} setSelectedPage={setSelectedPage} setMobileNavIsOpen={setMobileNavIsOpen} />
				<NavLink page="INVESTMENT" selectedPage={selectedPage} setSelectedPage={setSelectedPage} setMobileNavIsOpen={setMobileNavIsOpen} />
				<NavLink page="BLOG" selectedPage={selectedPage} setSelectedPage={setSelectedPage} setMobileNavIsOpen={setMobileNavIsOpen} />
				<NavLink page="BOOK ME" selectedPage={selectedPage} setSelectedPage={setSelectedPage} setMobileNavIsOpen={setMobileNavIsOpen} />
				<NavLink page="GALLERY" selectedPage={selectedPage} setSelectedPage={setSelectedPage} setMobileNavIsOpen={setMobileNavIsOpen} />
			</div>
			<div className="flex justify-end w-3/12">
				<Link id="mobile-nav-close-btn p-4" className="w-1/2 flex justify-end bg-amber-50 px-5 py-3 opacity-85" style={{height: 'fit-content', width: 'fit-content'}} to={`/${previousPage}`} onClick={() => {
					closeMobileNav()
				}}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
  						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
					</svg>

				</Link>
			</div>
		</motion.div>
	}
  </>
  )
}

export default MobileNav