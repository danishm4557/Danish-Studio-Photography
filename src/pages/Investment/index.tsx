import InvestmentTextBlock from './investmentTextBlock';
import TheProcess from './theProcess';
import Faq from './faq';

type Props = {
	setSelectedPage: (value: string) => void;
}

const Investment = ({setSelectedPage}: Props) => {

	setSelectedPage('investment');

	return (
		<div>
			<InvestmentTextBlock />
			<TheProcess />
			<Faq />
		</div>
	)
}

export default Investment