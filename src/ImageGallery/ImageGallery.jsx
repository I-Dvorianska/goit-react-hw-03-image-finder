import './ImageGallery';
import ImageGalleryItem from 'ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
    console.log(images)
    return <ul className="ImageGallery">
        {images.map(image => {
            return <ImageGalleryItem item={image}/>
  })}
</ul>
}

export default ImageGallery;