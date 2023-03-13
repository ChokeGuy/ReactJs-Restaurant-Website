const GalleryItem = (props) => {
  return (
    // jsx-a11y/anchor-is-valid
    <a className="gallery-item" onClick={props.onClick}>
      <img className="img-fluid" src={props.src} alt=""></img>
    </a>
  );
};
export default GalleryItem;
