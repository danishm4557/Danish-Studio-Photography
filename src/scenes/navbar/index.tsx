import NavLink from './NavLink';
import { Link } from 'react-router-dom';
import Logo from '../../assets/danish-studio-photography-logo.png';

type Props = {
	selectedPage:string;
	setSelectedPage:(value:string) => void;
}

const Navbar = ({
	selectedPage,
	setSelectedPage
}: Props) => {

	const flexBetween: string = "flex items-center justify-between";

  return <nav>
	<div className={`${flexBetween} fixed top-0 w-full px-16 py-8`}>
		<div className={`${flexBetween} gap-16 karla-300`}>
			<NavLink page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			<NavLink page="Welcome" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			<NavLink page="Investment" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

		</div>
		<div className="flex items-center justify-center">
			<Link to="/" onClick={() => setSelectedPage('home')} className="flex justify-center">
				<img src={Logo} alt="Danish Studio Photography Logo" className="w-1/2" style={{maxWidth: "450px"}} />
			</Link>
		</div>
		<div className={`${flexBetween} gap-16 karla-300`}>
			<NavLink page="Blog" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			<NavLink page="Book Me" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			<NavLink page="Gallery" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
		</div>
	</div>
  </nav>
}

export default Navbar