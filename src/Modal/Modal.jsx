import { Component } from 'react';
import './Modal.css';

// const Modal = ({image, onClick}) => {
//     return <div className="Overlay" onClick={onClick}>
//   <div className="Modal">
//     <img src={image} alt="" />
//   </div>
//   </div>
// }

class Modal extends Component  {

  componentDidMount() {
    window.addEventListener('keydown', this.onEscClick)
  }

  onEscClick = (e) => {
    const { onClick } = this.props;
    if (e.code === 'Escape') {
      onClick();
    }
  }
 
  render() {
    const { onClick, image } = this.props;
    
     return <div className="Overlay" onClick={onClick}>
    <div className="Modal">
    <img src={image} alt="" />
  </div>
  </div>
  }
   
}

export default Modal;