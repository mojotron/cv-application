import React, { Component } from 'react';
import '../styles/Form.css';
import ButtonDelete from './ButtonDelete';

class Form extends Component {
  render() {
    const fields = [];
    for (const [fieldKey, fieldValue] of Object.entries(this.props.data)) {
      if (fieldKey === 'id') continue;
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
        <div className="Form__field" key={fieldKey}>
          <p className="Form__field__label">{format}</p>
          {inputElement}
        </div>
      );
    }
    return (
      <form className="Form" onSubmit={this.props.handleSubmit}>
        <h2>{this.props.title}</h2>
        <div>{fields}</div>
        <button type="submit" className="btn btn--close">
          X
        </button>
        {this.props.delete && (
          <ButtonDelete handleDelete={this.props.handleDelete} />
        )}
      </form>
    );
  }
}

export default Form;
