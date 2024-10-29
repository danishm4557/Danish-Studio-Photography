import { Carousel } from "flowbite-react";
import homePageCarouselImage1 from '../../assets/homePageCarouselImage1.jpg';
import homePageCarouselImage2 from '../../assets/homePageCarouselImage2.jpg';
import homePageCarouselImage3 from '../../assets/homePageCarouselImage3.jpg';
import homePageCarouselImage4 from '../../assets/homePageCarouselImage4.jpg';
import homePageCarouselImage5 from '../../assets/homePageCarouselImage5.jpg';
import homePageCarouselImage6 from '../../assets/homePageCarouselImage6.jpeg';
import homePageCarouselImage7 from '../../assets/homePageCarouselImage7.jpg';
import homePageCarouselImage8 from '../../assets/homePageCarouselImage8.jpg';
import homePageCarouselImage9 from '../../assets/homePageCarouselImage9.jpg';
import homePageCarouselImage10 from '../../assets/homePageCarouselImage10.jpeg';

export function BackgroundImageCarousel() {
  return (
    <div className="backgroundImageCarousell border-8 border-white">
      <Carousel slideInterval={5000}>
        <img src={homePageCarouselImage1} alt="Home Page Carousel Image 1" />
        <img src={homePageCarouselImage2} alt="Home Page Carousel Image 2" />
        <img src={homePageCarouselImage3} alt="Home Page Carousel Image 3" />
        <img src={homePageCarouselImage4} alt="Home Page Carousel Image 4" />
        <img src={homePageCarouselImage5} alt="Home Page Carousel Image 5" />
        <img src={homePageCarouselImage6} alt="Home Page Carousel Image 6" />
        <img src={homePageCarouselImage7} alt="Home Page Carousel Image 7" />
        <img src={homePageCarouselImage8} alt="Home Page Carousel Image 8" />
        <img src={homePageCarouselImage9} alt="Home Page Carousel Image 9" />
        <img src={homePageCarouselImage10} alt="Home Page Carousel Image 10" />
      </Carousel>
    </div>
  )
}