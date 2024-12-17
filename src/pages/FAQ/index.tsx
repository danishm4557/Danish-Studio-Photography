import Faq from '../Investment/faq'

type Props = {
	setSelectedPage: (value: string) => void;
}

const FAQ = ({setSelectedPage}: Props) => {

	setSelectedPage('faq');

	return (
		<div>
			<Faq />
		</div>
	)
}

export default FAQ