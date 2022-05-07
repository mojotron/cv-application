import React from 'react';

function Form(props) {
  const inputs = [];

  for (const [key, fieldValue] of Object.entries(props.fields)) {
    if (key !== 'formActive') {
      const format = key
        .split(/(?=[A-Z])/)
        .map(s => s.toLowerCase())
        .join(' ');

      inputs.push(
        <div key={key}>
          <label htmlFor={key}>{format}</label>
          <input
            type="text"
            id={key}
            value={fieldValue}
            onChange={props.handleChange}
            name={key}
          />
        </div>
      );
    }
  }

  return (
    <form className="Form" onSubmit={props.handleSubmit}>
      <h2>Hello</h2>
      {inputs}

      <button type="submit">Apply</button>
    </form>
  );
}

export default Form;
