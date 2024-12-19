
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import lgZoom from 'lightgallery/plugins/zoom';

import image1 from '../../assets/galleryImages/image1.jpg';
import image2 from '../../assets/galleryImages/image2.jpg';
import image3 from '../../assets/galleryImages/image3.jpg';
import image4 from '../../assets/galleryImages/image4.jpg';
import image5 from '../../assets/galleryImages/image5.jpg';
import image6 from '../../assets/galleryImages/image6.jpg';
import image7 from '../../assets/galleryImages/image7.jpg';
import image8 from '../../assets/galleryImages/image8.jpg';
import image9 from '../../assets/galleryImages/image9.jpg';
import image10 from '../../assets/galleryImages/image10.jpg';
import image11 from '../../assets/galleryImages/image11.jpg';
import image12 from '../../assets/galleryImages/image12.jpg';
import image13 from '../../assets/galleryImages/image13.jpg';
import image14 from '../../assets/galleryImages/image14.jpg';
import image15 from '../../assets/galleryImages/image15.jpg';
import image16 from '../../assets/galleryImages/image16.jpg';
import image17 from '../../assets/galleryImages/image17.jpg';
import image18 from '../../assets/galleryImages/image18.jpg';
import image19 from '../../assets/galleryImages/image19.jpg';
import image20 from '../../assets/galleryImages/image20.jpg';
import image21 from '../../assets/galleryImages/image21.jpg';
import image22 from '../../assets/galleryImages/image22.jpg';
import image23 from '../../assets/galleryImages/image23.jpg';
import image24 from '../../assets/galleryImages/image24.jpg';
import image25 from '../../assets/galleryImages/image25.jpg';
import image26 from '../../assets/galleryImages/image26.jpg';
import image27 from '../../assets/galleryImages/image27.jpg';
import image28 from '../../assets/galleryImages/image28.jpg';
import image29 from '../../assets/galleryImages/image29.jpg';
import image30 from '../../assets/galleryImages/image30.jpg';
import image31 from '../../assets/galleryImages/image31.jpg';
import image32 from '../../assets/galleryImages/image32.jpg';
import image33 from '../../assets/galleryImages/image33.jpg';
import image34 from '../../assets/galleryImages/image34.jpg';
import image35 from '../../assets/galleryImages/image35.jpg';
import image36 from '../../assets/galleryImages/image36.jpg';
import image37 from '../../assets/galleryImages/image37.jpeg';
import image38 from '../../assets/galleryImages/image38.jpg';
import image39 from '../../assets/galleryImages/image39.jpg';
import image40 from '../../assets/galleryImages/image40.jpg';

const allImage = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27, image28, image29, image30, image31, image32, image33, image34, image35, image36, image37, image38, image39, image40 ];

type Props = {
	setSelectedPage: (value: string) => void;
}

const GridGallery = ({setSelectedPage}: Props) => {

	setSelectedPage('gallery');

  return (
	<div className="flex flex-col gap-y-10 w-full section-padding"  style={{backgroundColor:'#f6f2ef'}}>
		<div className="homemade-apple-regular text-2xl md:text-3xl mt-5 text-stone-800">See My Work</div>
		<LightGallery plugins={[lgZoom]} mode="lg-fade" elementClassNames="grid gap-5 grid-cols-2 md:grid-cols-4 pb-10">
			{
				allImage.map((image, key) => [
					<a data-lg-size="1406-1390"
						className="gallery-item"
						data-src={image}
						key={key}
					>
						<img
							className="w-full h-52 sm:h-72 md:h-80 lg:h-96 object-cover"
							src={image}
						/>
					</a>
				])
			}
		</LightGallery>
	</div>
  )
}

export default GridGallery