import InvestmentTextBlock from "../Investment/investmentTextBlock"

type Props = {
  setSelectedPage: ( value: string ) => void;
  setNavLinksColor: (value: string) => void;
}

const Pricing = ({setSelectedPage, setNavLinksColor}: Props) => {

  setSelectedPage('pricing');
  setNavLinksColor('black');

  return (
	<InvestmentTextBlock />
  )
}

export default Pricing