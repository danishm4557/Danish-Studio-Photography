import InvestmentTextBlock from './investmentTextBlock';
import TheProcess from './theProcess';
import Faq from './faq';

type Props = {
	setSelectedPage: (value: string) => void;
	setNavLinksColor: (value: string) => void;
}

const Investment = ({setSelectedPage, setNavLinksColor}: Props) => {

	setSelectedPage('investment');
	setNavLinksColor('black');

	return (
		<div>
			<InvestmentTextBlock />
			<TheProcess />
			<Faq />
		</div>
	)
}

export default Investment