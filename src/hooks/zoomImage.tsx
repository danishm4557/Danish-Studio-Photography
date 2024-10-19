import { useEffect, useRef, useState } from 'react';

type Props = {
	src:string;
	alt:string;
}

const ZoomImage = ({ src, alt }:Props) => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
	let observerRefValue = null;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it becomes visible
        }
      });
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
	  observerRefValue = imageRef.current;
    }

    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, []);

  return (
    <div
      ref={imageRef}
      className={`transition-transform duration-700 ease-in-out ${isVisible ? 'scale-100' : 'scale-75'}`}
    >
      <img src={src} alt={alt} className="w-full h-auto" />
    </div>
  );
};

export default ZoomImage;