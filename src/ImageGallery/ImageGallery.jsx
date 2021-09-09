import './ImageGallery.css';
import ImageGalleryItem from 'ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
   
    return <ul className="ImageGallery">
        {images.map(image =>
            <ImageGalleryItem
                id={image.id}
                key={image.id}
                webformatURL={image.webformatURL}
             />
             )}
            </ul>
}

export default ImageGallery;