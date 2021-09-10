import './Modal.css';

const Modal = ({image}) => {
    return <div className="Overlay">
  <div className="Modal">
    <img src={image} alt="" />
  </div>
  </div>
}

export default Modal;