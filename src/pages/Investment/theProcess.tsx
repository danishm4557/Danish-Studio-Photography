import processImage1 from '../../assets/theProcessImage1.jpg';
import processImage2 from '../../assets/theProcessImage2.jpg';
import { Link } from 'react-router-dom'

type Props = {
	setSelectedPage: (value: string) => void;
}

const TheProcess = ({setSelectedPage}: Props) => {
  return (
	<div className="section-padding">
		{/* 1st row */}
		<div className="flex flex-col sm:flex-row gap-8">
			<div className="sm:w-1/2">
				<div className="text-center homemade-apple-regular text-3xl my-12 font-light tracking-widest">The Process</div>
				<div className="flex flex-col sm:flex-row gap-6">
					<div className="flex flex-col gap-6 tracking-wider sm:w-1/3">
						<div className="text-center font-light">STEP</div>
						<div className="text-center anton-sc-regular italic text-4xl sm:text-5xl text-stone-800">01.</div>
						<div className="text-sm leading-8 font-light">
							Reach out <Link to="/bookme" onClick={() => setSelectedPage('bookeme')} className='border-b-2 hover:text-gray-600'>here</Link> to inquire! Give me ALLL the deets your envisioning for your big day and don’t skip out on anything! I love hearing about who you are, what you want for your big day, guest count, location and of course, your love story.
						</div>
					</div>
					<div className="flex flex-col gap-6 tracking-wider sm:w-1/3">
						<div className="text-center font-light">STEP</div>
						<div className="text-center anton-sc-regular italic text-4xl sm:text-5xl text-stone-800">02.</div>
						<div className="text-sm leading-8 font-light">
							It’s time to set up a call or FaceTime meeting! I LOOVEE getting to connect with my future clients on a deeper level! This gives us both a chance to get to know each other & make sure we are a perfect fit!
						</div>
					</div>
					<div className="flex flex-col gap-6 tracking-wider sm:w-1/3">
						<div className="text-center font-light">STEP</div>
						<div className="text-center anton-sc-regular italic text-4xl sm:text-5xl text-stone-800">03.</div>
						<div className="text-sm leading-8 font-light">
							Ready to sign the dotted line? A customized proposal will be sent your way to view & sign! Once you have put down a retainer, it’s time to pop the champagne! A Welcome Guide will be sent your way that’s packed full of any and all information you will need to know leading up to your ‘I do’ day!
						</div>
					</div>
				</div>
				<div>
					<img className="pt-10 sm:py-10 md:w-3/4" src={processImage1} alt="Process Image 1 of couple after their wedding" />
				</div>
			</div>
			<div className="sm:w-1/2">
				<img className="pb-10 sm:py-10 md:w-3/4" src={processImage2} alt="Process Image 1 of couple after their wedding" />
				<div className="flex flex-col sm:flex-row gap-6">
					<div className="flex flex-col gap-6 tracking-wider sm:w-1/3">
						<div className="text-center font-light">STEP</div>
						<div className="text-center anton-sc-regular italic text-4xl sm:text-5xl text-stone-800">04.</div>
						<div className="text-sm leading-8 font-light">
							WHOOP WHOOP! Let the magic  making begin! It’s time to set a date for your engagement session. We’ll discuss locations, outfits, & all the other fun details.
						</div>
					</div>
					<div className="flex flex-col gap-6 tracking-wider sm:w-1/3">
						<div className="text-center font-light">STEP</div>
						<div className="text-center anton-sc-regular italic text-4xl sm:text-5xl text-stone-800">05.</div>
						<div className="text-sm leading-8 font-light">
							A few months before you say “I  do!” We’ll set up a chat or coffee  date to talk all wedding things! From timelines, to first looks & everything in between! <strong>PSST! It’s getttinn real!!!</strong>
						</div>
						<div className="text-sm leading-8 font-light">
							It’s all in the details! Want a wedding day that’s as smooth as the buttercream frosting on your wedding cake? Yeah, me too! It’s my job to help you create a timeline that makes for a stress free day all while enjoying time with the ones you love!
						</div>
					</div>
					<div className="flex flex-col gap-6 tracking-wider sm:w-1/3">
						<div className="text-center font-light">STEP</div>
						<div className="text-center anton-sc-regular italic text-4xl sm:text-5xl text-stone-800">06.</div>
						<div className="text-sm leading-8 font-light">
							Oh WOW, you made it to step 06!! That means you survived wedding planning & it’s time to get you hitched. Whoop whoop! Let’s PARTTAY!!
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default TheProcess