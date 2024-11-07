import InvestmentTextBlock from './investmentTextBlock';
import TheProcess from './theProcess';
import Faq from './faq';

type Props = {
	setSelectedPage: (value: string) => void;
}

const Investment = ({setSelectedPage}: Props) => {
  return (
	<div>
		<InvestmentTextBlock />
		<TheProcess setSelectedPage={setSelectedPage}/>
		<Faq />
	</div>
  )
}

export default Investment