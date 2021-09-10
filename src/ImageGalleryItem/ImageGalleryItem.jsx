import './ImageGalleryItem.css';

const ImageGalleryItem = ({ id, webformatURL,selectImage, largeImageURL}) => {
  
  return <li key={id} className="ImageGalleryItem" onClick={() => selectImage(largeImageURL)}>
  <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
</li>
}

export default ImageGalleryItem;