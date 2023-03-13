const GalleryItem = (props) => {
  return (
    // eslint-disable-next-line
    <a className="gallery-item" onClick={props.onClick}>
      <img className="img-fluid" src={props.src} alt=""></img>
    </a>
  );
};
export default GalleryItem;
