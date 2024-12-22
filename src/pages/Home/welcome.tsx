import profilePicFlowersBackground from '../../assets/profilePicFlowersBackground.jpg'
import { Link } from 'react-router-dom';
import ZoomImage from '../../hooks/zoomImage';

const Welcome = () => {
  return (
	<>
		<div className="section-padding text-center">
			<div className="karla-300 py-6 sm:px-6 sm:w-3/4 md:w-1/2 mx-auto text-lg tracking-wider" style={{color: '#a3867d'}}>HERE FOR LIFE'S FEEL GOOD MOMENTS</div>
			<div className="karla-300 py-6 sm:px-6 sm:w-3/4 md:w-1/2 mx-auto tracking-wide leading-9">Wherever your adventures take you, I’m here to capture every moment big and small. Let’s do this.</div>
			<div className="sm:h-[100px]"></div>
			<div className="flex flex-col sm:flex-row align-middle my-5 sm:my-0">
				<div className="sm:w-1/3 mb-10 sm:m-auto"><hr /></div>
				<div className="sm:w-1/3 homemade-apple-regular text-4xl pt-3">Welcome</div>
				<div className="sm:w-1/3 mt-10 sm:m-auto"><hr /></div>
			</div>
		</div>
		<div className="section-padding flex flex-col sm:flex-row">
			<div className="sm:w-1/2 mx-auto sm:py-6">
				<ZoomImage src={profilePicFlowersBackground} alt="Profile image of Danish" />
			</div>
			<div className="sm:w-1/2 sm:p-6 whitespace-normal">
				<div className="md:h-[100px]"></div>
				<p className="karla-300 tracking-wide leading-7 mt-10 sm:mt-0 mb-5">
					HEY GUYS,
				</p>
				<div className="anton-sc-regular italic text-4xl md:text-5xl mt-5 mb-10 tracking-wider leading-7">
					I'm Danish!
				</div>
				<p className="karla-300 tracking-wide leading-7 mt-5">
					And I’m so freakin pumped you’re here!!!! I’m a midwest photographer based out of Chicago, IL. I’ll travel just about anywhere for some good laughs + tacos!
				</p>
				<p className="karla-300 tracking-wide leading-7 mt-5">
					My mission as photographer is to capture real, authentic images that will leave you speechless now and many years to come. You can take a load off knowing your go-to-photographer has got this covered!
				</p>
				<p className="karla-300 tracking-wide mt-5">
					So you ready to make some magic?
				</p>
				<Link to={`/bookme`}>
					<button className="karla-300 text-sm tracking-[0.5rem] rounded-sm text-white bg-yellow-800 hover:bg-opacity-85 mt-10 p-3">
						LET'S DO THIS
					</button>
				</Link>
			</div>
		</div>
	</>
  )
}

export default Welcome