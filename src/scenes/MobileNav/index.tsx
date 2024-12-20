import {useRef} from 'react';
import { Link } from 'react-router-dom';
import MobileNavLink from './MobileNavLink';
import { motion } from 'framer-motion';
import backgroundImage from '../../assets/navigation-background-image.jpg';
import LogoWhite from '../../assets/Danish-Studio-Logo-White.png';


type Props = {
	setSelectedPage:(value:string) => void;
	previousPage:string;
	isAboveSmallScreens:boolean;
	setMobileNavIsOpen:(value:boolean) => void;
}


const MobileNav = ({ setSelectedPage, previousPage, isAboveSmallScreens, setMobileNavIsOpen }: Props) => {

	setSelectedPage('navigation');

	const closeButtonRef = useRef<HTMLAnchorElement>(null);

	const closeMobileNav = () => {
		setMobileNavIsOpen(false);
	}

  return (<>
  	{
		isAboveSmallScreens ?
			[closeButtonRef.current ? closeButtonRef.current.click() : '']
		:
		<motion.div
		id="navigation-motion-div"
		className="flex flex-col justify-between py-12 px-5"
		initial={{ x: "-300px" }}
		animate={{ x: "0px" }}
		// custom insert for background image
		style={{
			backgroundImage: `url(${backgroundImage})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			height: '100%',
			minHeight: 'calc(100vh-0.4rem)',
		  }}
		>
			<div className="flex justify-between">
				<div className="flex flex-col gap-2">
					<MobileNavLink page="WELCOME" setMobileNavIsOpen={setMobileNavIsOpen} />
					<MobileNavLink page="INVESTMENT" setMobileNavIsOpen={setMobileNavIsOpen} />
					<MobileNavLink page="BOOK ME" setMobileNavIsOpen={setMobileNavIsOpen} />
					<MobileNavLink page="GALLERY" setMobileNavIsOpen={setMobileNavIsOpen} />
				</div>
				<div className="flex justify-end w-3/12">
					<Link id="mobile-nav-close-btn p-4" className="w-1/2 flex justify-end bg-amber-50 px-5 py-3 opacity-85" style={{height: 'fit-content', width: 'fit-content'}} to={`/${previousPage}`} ref={closeButtonRef} onClick={() => {
						closeMobileNav()
					}}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
						</svg>

					</Link>
				</div>
			</div>
			<div className="flex justify-center">
				<img src={LogoWhite} alt="Danish Studio Photography Logo" className="w-10/12 border border-white p-[2px] rounded-full" style={{maxWidth: "150px"}} />
			</div>
		</motion.div>
	}
  </>
  )
}

export default MobileNav