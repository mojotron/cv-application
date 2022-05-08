import React from 'react';
import '../styles/Form.css';

function Form(props) {
  const inputs = [];

  for (const [key, fieldValue] of Object.entries(props.fields)) {
    if (key !== 'formActive') {
      const format = key
        .split(/(?=[A-Z])/)
        .map(s => s.toLowerCase())
        .join(' ');

      inputs.push(
        <div key={key} className="Form__field">
          <label htmlFor={key}>{format}</label>
          {key === 'description' ? (
            <textarea
              id={key}
              value={fieldValue}
              onChange={props.handleChange}
              name={key}
            />
          ) : (
            <input
              type="text"
              id={key}
              value={fieldValue}
              onChange={props.handleChange}
              name={key}
            />
          )}
        </div>
      );
    }
  }

  return (
    <form className="Form" onSubmit={props.handleSubmit}>
      <h2>{props.header}</h2>
      {inputs}

      <button type="submit" className="Form__btn--close">
        X
      </button>
    </form>
  );
}

export default Form;
