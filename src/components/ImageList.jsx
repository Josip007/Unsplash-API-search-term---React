import './ImageList.css';
import ImageShow from './ImageShow';

function ImageList({ images }) {
    const renderenImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />
    })

    return <div className='image-list'>{renderenImages}</div>
}

export default ImageList;