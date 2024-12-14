import { useRef, useState } from 'react';
import investmentDanishStudioPhoto from '../../assets/danish-studio-photography.png'
import { motion } from 'framer-motion';

const Faq = () => {


	const answer1 = useRef<HTMLDivElement>(null);
	const answer2 = useRef<HTMLDivElement>(null);
	const answer3 = useRef<HTMLDivElement>(null);
	const answer4 = useRef<HTMLDivElement>(null);

	const [question1Operator, setQuestion1Operator] = useState(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 font-light"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>)
	const [question2Operator, setQuestion2Operator] = useState(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 font-light"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>)
	const [question3Operator, setQuestion3Operator] = useState(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 font-light"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>)
	const [question4Operator, setQuestion4Operator] = useState(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 font-light"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>)



	const showHideFaq1 = () => {
		if (answer1.current?.classList.contains('hidden')) {
			setQuestion1Operator(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 font-light"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" /></svg>);
		}
		else {
			setQuestion1Operator(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 font-light"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>);
		}
		answer1.current?.classList.toggle('hidden');
	}
	const showHideFaq2 = () => {
		if (answer2.current?.classList.contains('hidden')) {
			setQuestion2Operator(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 font-light"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" /></svg>);
		}
		else {
			setQuestion2Operator(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 font-light"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>);
		}
		answer2.current?.classList.toggle('hidden');
	}
	const showHideFaq3 = () => {
		if (answer3.current?.classList.contains('hidden')) {
			setQuestion3Operator(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 font-light"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" /></svg>);
		}
		else {
			setQuestion3Operator(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 font-light"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>);
		}
		answer3.current?.classList.toggle('hidden');
	}
	const showHideFaq4 = () => {
		if (answer4.current?.classList.contains('hidden')) {
			setQuestion4Operator(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 font-light"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" /></svg>);
		}
		else {
			setQuestion4Operator(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 font-light"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>);
		}
		answer4.current?.classList.toggle('hidden');
	}

  return (
	<div className="section-padding flex flex-col sm:flex-row gap-8">
		<div className="flex flex-col sm:w-1/2 font-light tracking-wider">
			<div className="text-start homemade-apple-regular text-3xl my-12 font-light tracking-widest">FAQ</div>
			<div className="flex flex-col">
				<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.3, delay: 0, ease: "linear" }}
				className="border-b-2 py-10">
					<div onClick={() => showHideFaq1()} className="flex cursor-pointer">
						{question1Operator}<span className="pl-2">WHAT'S YOUR TURNAROUND TIME?</span>
					</div>
					<div className="pt-5 hidden" ref={answer1}>You’ll receive all your pretty photos 6-8 weeks after you’ve said "I Do"! Engagement/couples sessions have a two week turnaround time.</div>
				</motion.div>
				<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.3, delay: 0.3, ease: "linear" }}
				className="border-b-2 py-10">
					<div onClick={() => showHideFaq2()} className="flex cursor-pointer">
						{question2Operator}<span className="pl-2">HOW MANY PHOTOS WILL I RECEIVE?</span>
					</div>
					<div className="pt-5 hidden" ref={answer2}>On average, we deliver around 1,200 images for weddings & 100 images for regular sessions.</div>
				</motion.div>
				<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.3, delay: 0.6, ease: "linear" }}
				className="border-b-2 py-10">
					<div onClick={() => showHideFaq3()} className="flex cursor-pointer">
						{question3Operator}<span className="pl-2">DO YOU TRAVEL?</span>
					</div>
					<div className="pt-5 hidden" ref={answer3}>YES YES! 100x YES!!! If you’re there, I’m there.</div>
				</motion.div>
				<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.3, delay: 0.9, ease: "linear" }}
				className="py-10">
					<div onClick={() => showHideFaq4()} className="flex cursor-pointer">
						{question4Operator}<span className="pl-2">DO YOU OFFER CUSTOM PACKAGES?</span>
					</div>
					<div className="pt-5 hidden" ref={answer4}>Sure do! We understand that every wedding is unique & might not fit the packages offered. We will work with you to create a package that best fits your needs!</div>
				</motion.div>
			</div>
		</div>
		<div className="sm:w-1/2">
			<img src={investmentDanishStudioPhoto} alt="Danish Studio Photo" />
		</div>
	</div>
  )
}

export default Faq