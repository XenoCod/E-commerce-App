import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute  w-full h-32   bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={2500}
      >
        <div>
          <img
            src="https://links.papareact.com/gi1"
            alt="Banner 1"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src="https://links.papareact.com/6ff"
            alt="Banner 2"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src="https://links.papareact.com/7ma"
            alt="Banner 3"
            loading="lazy"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
