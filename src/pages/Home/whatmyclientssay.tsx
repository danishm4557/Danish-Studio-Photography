import { useRef, useState } from 'react'
import whatmyclientssayimage1 from '../../assets/whatmyclientssayimage-1.jpg';

const Whatmyclientssay = () => {

	const [review, setReview] = useState<number>(1);
	const reviewDivRef = useRef<HTMLDivElement>(null);
	const reviewCount = useRef<number>(1);

	const updateReview = (direction:string) => {
		if (direction == 'prev') {
			console.log('prev');
			if (review == 1) {
				setReview(4);
				reviewCount.current = 4;
				// if (reviewRef.current) reviewRef.current.style.transform = `translate(-300%)`
				if (reviewDivRef.current) reviewDivRef.current.style.transform = `translate(-${100*reviewCount.current-100}%)`
			}
			else {
				setReview(review - 1);
				reviewCount.current = reviewCount.current - 1;
				// if (reviewRef.current) reviewRef.current.style.transform = `translate(100%)`
				if (reviewDivRef.current) reviewDivRef.current.style.transform = `translate(-${100*reviewCount.current-100}%)`
			}
		}
		else {
			console.log('next');
			if (review == 4) {
				setReview(1);
				reviewCount.current = 1;
				if (reviewDivRef.current) reviewDivRef.current.style.transform = `translate(${100*reviewCount.current-100}%)`
			}
			else {
				setReview(review + 1);
				reviewCount.current = reviewCount.current + 1;
				if (reviewDivRef.current) reviewDivRef.current.style.transform = `translate(-${100*reviewCount.current-100}%)`
			}
		}
		if (reviewDivRef.current) reviewDivRef.current.style.transition = `transform ease .4s, -webkit-transform ease .4s`
		console.log(reviewDivRef)
	}
  return (
	<div className="flex flex-col sm:flex-row w-full" style={{backgroundColor:'#f6f2ef'}}>
		<div className="flex flex-col w-full sm:w-6/12 text-stone-800 leading-7 tracking-wide karla-300">
			<div className="sm:h-[100px]"></div>
			<h1 className="anton-sc-regular italic text-4xl md:text-5xl section-padding text-nowrap">What my clients say...</h1>
			{/* arrows */}
			<div className="flex ml-auto pr-[1.5rem] sm:pr-[4rem]">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-5 ${review == 1 ? 'text-stone-400' : ''}`} onClick={() => updateReview('prev')}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-5 ${review == 4 ? 'text-stone-400' : ''}`} onClick={() => updateReview('next')}>
					<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
				</svg>
			</div>
			{/* reviews: text carousel */}
			<div className="whitespace-nowrap overflow-hidden">
				 <div className="block w-[100%]" ref={reviewDivRef}>
					{/* review 1 */}
					<div className="inline-block whitespace-normal section-padding align-top">
						<div className="font-medium uppercase mb-5">
							"Shannon was so welcoming and comfortable to be around. She definitely knows how to make any potentially awkward situation a fun time!"
						</div>
						<div className="font-light mb-12">
							"We are so thrilled with how above and beyond she went to make sure she got the perfect pictures of us and we are SO excited to see everything she does with them. I highly recommend her to ANYONE. She’s got a personality that will be comforting for any type of person."
						</div>
						<div className="homemade-apple-regular text-3xl">
							- Christina
						</div>
					</div>
					{/* review 2 */}
					<div className="inline-block whitespace-normal section-padding align-top">
						<div className="font-medium uppercase mb-5">
							"My fiancé Eli and I did a styled bridal shoot with Shannon and the photos turned out so great!"
						</div>
						<div className="font-light mb-12">
							"So great that we booked her as our wedding photographer next September. She made us feel so comfortable and had a lot of great ideas for posing— we love Shannon and her style of photography is perfection!"
						</div>
						<div className="homemade-apple-regular text-3xl">
							- Hailey
						</div>
					</div>
					{/* review 3 */}
					<div className="inline-block whitespace-normal section-padding align-top">
						<div className="font-medium uppercase mb-5">
							"Not only do we love how our pictures turned out, but we had the best time with Shannon during our session!"
						</div>
						<div className="font-light mb-12">
							"My fiancé is pretty camera-shy, but Shannon was so helpful in making us feel comfortable and giving us some guidance and we LOVE how our pictures turned out. Shannon was super flexible when scheduling as we didn't have a lot of time to do it, but she fit us in (on one of her days off) and was so incredible. She is SO easy to talk with, bubbly, and kind. If you live in or around the Chicago-land area, I would HIGHLY recommend using Shannon for a photographer!!!"
						</div>
						<div className="homemade-apple-regular text-3xl">
							- Sara
						</div>
					</div>
					{/* review 4 */}
					<div className="inline-block whitespace-normal section-padding align-top">
						<div className="font-medium uppercase mb-5">
							"Shannon did an amazing job with our session. She is so personable and makes it really fun!"
						</div>
						<div className="font-light mb-12">
							"My husband even had fun too! I also want to give her praise for helping me with outfits. This is something I struggle with, and she helped me make those decisions. Highly recommend! She’s got serious talent."
						</div>
						<div className="homemade-apple-regular text-3xl">
							- Paige
						</div>
					</div>
				</div>
			</div>
			<div className="sm:h-[100px]"></div>
		</div>
		<div className="flex w-full sm:my-0 sm:w-6/12">
			<img src={whatmyclientssayimage1} className="w-full sm:w-8/12 sm:mx-auto sm:my-auto section-padding sm:p-0" />
		</div>
	</div>
  )
}

export default Whatmyclientssay