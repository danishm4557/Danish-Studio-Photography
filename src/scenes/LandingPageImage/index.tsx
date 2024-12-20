type Props = {
	selectedPage: string;
}

const LandingPageImage = ({selectedPage}: Props) => {
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
				selectedPage == 'gallery' ?
					<div id="galleryLandingPageImageDiv" className="flex my-auto border-8 border-white justify-center">
						<h1 className="homemade-apple-regular text-white text-center text-2xl sm:text-3xl leading-10 mt-auto mb-32 px-6 sm:px-16">Welcome to my gallery!</h1>
					</div>
				:
					''
			}
		</>
	)
}

export default LandingPageImage