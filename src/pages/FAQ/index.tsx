import Faq from '../Investment/faq'

type Props = {
	setSelectedPage: (value: string) => void;
	setNavLinksColor: (value: string) => void;
}

const FAQ = ({setSelectedPage, setNavLinksColor}: Props) => {

	window.scrollTo(0, 0)
	setSelectedPage('faq');
	setNavLinksColor('black');

	return (
		<div>
			<Faq />
		</div>
	)
}

export default FAQ