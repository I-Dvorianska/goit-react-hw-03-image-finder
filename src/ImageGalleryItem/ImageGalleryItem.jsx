import './ImageGalleryItem.css';

const ImageGalleryItem = ({ item }) => {
  console.log(item)
  return <li key={item.id} className="ImageGalleryItem">
  <img src={item.webformatURL} alt="" className="ImageGalleryItem-image" />
</li>
}

export default ImageGalleryItem;