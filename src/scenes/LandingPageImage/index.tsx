type Props = {
	selectedPage: string;
	setbackgroundImageColor: (value: string) => void;
}

const LandingPageImage = ({selectedPage, setbackgroundImageColor}: Props) => {

	if (selectedPage == 'investment') {
		setbackgroundImageColor('black');
	}
	else if (selectedPage == 'bookme') {
		setbackgroundImageColor('white');
	}

  return (
	<>
		{
			selectedPage == 'investment' ?
				<div id="investmentLandingPageImageDiv" className="flex border-8 border-white justify-end">
					<h1 className="homemade-apple-regular text-white text-center text-3xl leading-10 mt-auto mb-24 px-6 sm:px-16">Learn all about my experience!</h1>
				</div>
			:
			selectedPage == 'bookme' ?
				<div id="bookmeLandingPageImageDiv" className="flex my-auto border-8 border-white justify-center">
					<h1 className="homemade-apple-regular text-white text-center text-2xl sm:text-3xl leading-10 mt-auto mb-32 px-6 sm:px-16">Let's do this thing!</h1>
				</div>
			:
			''
		}
	</>
  )
}

export default LandingPageImage