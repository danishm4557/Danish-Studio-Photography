import { Link } from 'react-router-dom';
import LogoWhite from '../../assets/Danish-Studio-Logo-White.png';

type Props = {
	setSelectedPage:(value:string) => void;
	setMobileNavIsOpen:(value:boolean) => void;
}

const Footer = ({setSelectedPage, setMobileNavIsOpen}: Props) => {
  return (
	<>
		<div className="flex flex-col sm:flex-row justify-between px-6 py-12 text-center text-white bg-stone-800 gap-x-[3rem] gap-y-[4.5rem] mt-10">
			<div className="sm:w-2/12 align-center mx-auto my-auto">
				<img src={LogoWhite} alt="Danish Studio Photography Logo" className="w-full border border-white p-[2px] rounded-full" style={{maxWidth: '175px'}}/>
			</div>
			<div className="xs:w-8/12 sm:w-4/12 max-sm:mx-auto flex flex-col justify-between gap-7 whitespace-pre-wrap karla-300">
				<div className="text-2xl">CHICAGO AND BEYOND</div>
				<div className="text-xl leading-10">
					Capturing feel good moments for the adventurous couples wherever they are.
				</div>
				<div className="flex gap-5 justify-center">
					<a href="https://www.instagram.com/danishposts/" target="_blank" className="hover:text-stone-300">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
							<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
							<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
							<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
						</svg>
					</a>
					<a href="https://www.codewithdanish.com/" target="_blank" className="hover:text-stone-300">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
						</svg>
					</a>
				</div>
			</div>
			<div className="sm:w-4/12 flex flex-col justify-start gap-9 karla-300">
				<div className="homemade-apple-regular text-3xl">Navigation</div>
				<div className="flex gap-x-10 mx-auto">
					<div className="flex flex-col gap-4">
						<Link to="/about" onClick={() => {
							setSelectedPage("about");
							setMobileNavIsOpen(false);
						}}>
								<span className="border-b-2 hover:text-stone-300 hover:border-stone-300">ABOUT</span>
						</Link>
						<Link to="/bookme" onClick={() => {
							setSelectedPage("bookme");
							setMobileNavIsOpen(false);
						}}>
								<span className="border-b-2 hover:text-stone-300 hover:border-stone-300">BOOK ME</span>
						</Link>
						<Link to="/faq" onClick={() => {
							setSelectedPage("faq");
							setMobileNavIsOpen(false);
						}}>
								<span className="border-b-2 hover:text-stone-300 hover:border-stone-300">FAQ</span>
						</Link>
					</div>
					<div className="flex flex-col gap-4">
						<Link to="/terms-of-sevice" onClick={() => {
							setSelectedPage('termofservice');
							setMobileNavIsOpen(false);
						}}>
								<span className="border-b-2 hover:text-stone-300 hover:border-stone-300">TERMS OF SERVICE</span>
						</Link>
						<Link to={`/privacy-policy`} onClick={() => {
							setSelectedPage('privacypolicy');
							setMobileNavIsOpen(false);
						}}>
								<span className="border-b-2 hover:text-stone-300 hover:border-stone-300">PRIVACY POLICY</span>
						</Link>
						<Link to={`/blog`} onClick={() => {
							setSelectedPage('blog');
							setMobileNavIsOpen(false);
						}}>
								<span className="border-b-2 hover:text-stone-300 hover:border-stone-300">BLOG</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	</>
  )
}

export default Footer