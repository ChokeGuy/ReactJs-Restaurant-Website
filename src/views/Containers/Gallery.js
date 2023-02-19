import GalleryItem from "./Components/Gallery/GalleryItem";
import gallery_1 from "../../assests/images/gallery-images/gallery-1.jpg";
import gallery_2 from "../../assests/images/gallery-images/gallery-2.jpg";
import gallery_3 from "../../assests/images/gallery-images/gallery-3.jpg";
import gallery_4 from "../../assests/images/gallery-images/gallery-4.jpg";
import gallery_5 from "../../assests/images/gallery-images/gallery-5.jpg";
import gallery_6 from "../../assests/images/gallery-images/gallery-6.jpg";
import gallery_7 from "../../assests/images/gallery-images/gallery-7.jpg";
import gallery_8 from "../../assests/images/gallery-images/gallery-8.jpg";
import Carousel from "nuka-carousel";
const Gallery = (props) => {
  let gallerylist = [
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
    gallery_5,
    gallery_6,
    gallery_7,
    gallery_8,
  ];

  return (
    <div className="gallery-container">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="gallery-header">
              <div>GALLERY</div>
              <p>
                CHECK <span> OUR GALLERY</span>
              </p>
            </div>
          </div>
        </div>
        <div className="gallery-content">
          <Carousel
            autoplay={true}
            defaultControlsConfig={{
              nextButtonStyle: {
                visibility: "hidden",
              },
              prevButtonStyle: {
                visibility: "hidden",
              },
              pagingDotsClassName: "carousel-dot",
            }}
            slidesToShow={5}
            // speed={0}
            wrapAround={true}
          >
            {gallerylist &&
              gallerylist.length > 0 &&
              gallerylist.map((item, index) => {
                return <GalleryItem key={index} src={item} href={"/"} />;
              })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
