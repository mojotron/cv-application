import React, { Component } from 'react';
import '../styles/Form.css';

class Form extends Component {
  render() {
    const fields = [];
    for (const [fieldKey, fieldValue] of Object.entries(this.props.data)) {
      const format = fieldKey
        .split(/(?=[A-Z])/)
        .map(s => s.toLowerCase())
        .join(' ');

      let inputElement;
      if (fieldKey === 'description') {
        inputElement = (
          <textarea
            data-field={fieldKey}
            value={fieldValue}
            onChange={this.props.handleChange}
          />
        );
      } else {
        inputElement = (
          <input
            data-field={fieldKey}
            value={fieldValue}
            onChange={this.props.handleChange}
          />
        );
      }
      fields.push(
        <div key={fieldKey}>
          <p>{format}</p>
          {inputElement}
        </div>
      );
    }
    return (
      <form className="Form" onSubmit={this.props.handleSubmit}>
        <h2>{this.props.title}</h2>
        {fields}
        <button type="submit" className="Form__btn--close">
          X
        </button>
      </form>
    );
  }
}

export default Form;
