import { Component } from 'react';
import './Button.css';

class Button extends Component {

    onBtnClick = (page, onLoad) => {
       
    const newPage = this.props.page + 1;
    this.props.onLoad(newPage)
    }

    render() {
        const { onBtnClick } = this;

        return <button type="button" className="Button" onClick={ onBtnClick}>Load more</button>
    }
}

export default Button;