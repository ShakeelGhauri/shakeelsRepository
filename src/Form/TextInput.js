import React from "react";

function TextInput(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.Id}>{props.label}</label>
      <div className="field">
        <input
          id={props.Id}
          type="text"
          name={props.name}
          className="form-control"
          value={props.value}
          onChange={props.onChange}
        />
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>
    </div>
  );
}

export default TextInput;
