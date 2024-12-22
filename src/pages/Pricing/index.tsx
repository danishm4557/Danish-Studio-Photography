import InvestmentTextBlock from "../Investment/investmentTextBlock"

type Props = {
  setSelectedPage: ( value: string ) => void;
  setNavLinksColor: (value: string) => void;
}

const Pricing = ({setSelectedPage, setNavLinksColor}: Props) => {

  window.scrollTo(0, 0)
  setSelectedPage('pricing');
  setNavLinksColor('black');

  return (
	<InvestmentTextBlock />
  )
}

export default Pricing