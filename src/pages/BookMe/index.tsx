import { Link } from 'react-router-dom';
import bookmeImage1 from '../../assets/bookmeImage1.png';
import bookmeImage2 from '../../assets/bookmeImage2.png';
import Followmeoninsta from '../Home/followmeoninsta';
import ContactForm from './contactForm';

type Props = {
	setSelectedPage: (value: string) => void;
	setNavLinksColor: (value: string) => void;
}

const BookMe = ({setSelectedPage, setNavLinksColor}:Props) => {

	setSelectedPage('bookme');
	setNavLinksColor('black');

	return (
		<>
			<div className="flex flex-col sm:flex-row w-full section-padding gap-8 justify-between" style={{backgroundColor:'#f6f2ef'}}>
				<div className="flex flex-col sm:w-5/12">
					<img src={bookmeImage1} alt="Book me image 1" />
					<img src={bookmeImage2} alt="Book me image 2" />
				</div>
				<div className="sm:w-7/12 py-10 sm:py-28">
					<div className="flex flex-col gap-8 text-center">
						<div className="anton-sc-regular italic text-4xl md:text-5xl text-stone-800 tracking-widest" style={{lineHeight: '3.5rem'}}>Heck yesss,<br />you made it here!</div>
						<div className="font-light leading-9 tracking-widest">Things must be getting serious ;))) If you haven’t already, head over  to <Link to={`/pricing`} onClick={() => setSelectedPage('pricing')}><span className="border-b-2 border-stone-300 hover:border-stone-400">view my pricing</span></Link> and <Link to={`/faq`} onClick={() => setSelectedPage('faq')}><span className="border-b-2 border-stone-300 hover:border-stone-400">FAQ</span></Link> before inquiring! I’m so freaking pumped to chat with you about all your photography needs, friends! Please allow 24 - 48 hours for a response.</div>
						<ContactForm />
					</div>
				</div>
			</div>
			<Followmeoninsta />
		</>
	)
}

export default BookMe