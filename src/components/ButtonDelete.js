import React, { Component } from 'react';
import '../styles/ButtonDelete.css';
import binIcon from '../images/rubbish-bin.svg';

class ButtonDelete extends Component {
  render() {
    return (
      <button
        className="BtnDelete"
        type="button"
        onClick={this.props.handleDelete}
      >
        <img className="BtnDelete__icon" src={binIcon} alt="" />
      </button>
    );
  }
}

export default ButtonDelete;
