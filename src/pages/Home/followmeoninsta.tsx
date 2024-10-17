import followmeoninsta1 from '../../assets/followmeoninsta-1.jpeg';
import followmeoninsta2 from '../../assets/followmeoninsta-2.jpeg';
import followmeoninsta3 from '../../assets/followmeoninsta-3.jpeg';
import followmeoninsta4 from '../../assets/followmeoninsta-4.jpeg';
import followmeoninsta5 from '../../assets/followmeoninsta-5.jpeg';
import followmeoninsta6 from '../../assets/followmeoninsta-6.jpeg';

const Followmeoninsta = () => {
  return (
	<div className="flex flex-col border-red-500 gap-y-10 w-full section-padding">
		<div className="homemade-apple-regular text-2xl md:text-3xl mt-5 text-stone-800">Follow me on Insta</div>
		<a href="https://www.instagram.com/danishposts/" target="_blank">
			<div className="grid gap-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
				<img src={followmeoninsta1} alt="Follow me on Insta image 1" className="w-full" />
				<img src={followmeoninsta2} alt="Follow me on Insta image 2" className="w-full" />
				<img src={followmeoninsta3} alt="Follow me on Insta image 3" className="w-full" />
				<img src={followmeoninsta4} alt="Follow me on Insta image 4" className="w-full" />
				<img src={followmeoninsta5} alt="Follow me on Insta image 5" className="w-full" />
				<img src={followmeoninsta6} alt="Follow me on Insta image 6" className="w-full" />
			</div>
		</a>
	</div>
  )
}

export default Followmeoninsta