import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface ImageList{
    images: string[]
}

const ImageSlide = (imagesData: ImageList) => {
    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
    return (
        <div className="">
            <Carousel responsive={responsive}>
            {imagesData.images.map((image, index) => (
               <div key={index} className="aspect-[4/5]"> {/* Locks container to 16:9 ratio */}
            <img 
                src={image} 
                alt={`Service image ${index + 1}`} 
                className="w-full h-full rounded-md object-cover" 
            />
        </div>
            ))}
            
            </Carousel>
        </div>
    )
}

export default ImageSlide;