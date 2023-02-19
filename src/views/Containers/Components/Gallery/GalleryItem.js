const GalleryItem = (props) => {
  return (
    <a href={props.href} className="gallery-item">
      <img className="img-fluid" src={props.src} alt=""></img>
    </a>
  );
};
export default GalleryItem;
