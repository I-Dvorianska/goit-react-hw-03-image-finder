import './ImageGallery.css';
import ImageGalleryItem from 'ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, selected }) => {
   
    return <ul className="ImageGallery">
        {images.map(image =>
            <ImageGalleryItem
                id={image.id}
                key={image.id}
                webformatURL={image.webformatURL}
                largeImageURL={image.largeImageURL}
                selectImage={selected}
             />
             )}
            </ul>
}

export default ImageGallery;