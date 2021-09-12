import { Component } from 'react';
import './Button.css';
import PropTypes from 'prop-types';

class Button extends Component {

    static propTypes = {
        page: PropTypes.number,
        onLoad: PropTypes.func
    }

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