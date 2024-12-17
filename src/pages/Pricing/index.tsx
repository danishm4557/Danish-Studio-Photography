import InvestmentTextBlock from "../Investment/investmentTextBlock"

type Props = {
  setSelectedPage: ( value: string ) => void;
}

const Pricing = ({setSelectedPage}: Props) => {

  setSelectedPage('pricing');

  return (
	<InvestmentTextBlock />
  )
}

export default Pricing