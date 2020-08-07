import React from "react";
import TextInput from "../Form/TextInput";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="field">
        <TextInput
          id="title"
          name="title"
          label="Title"
          value={props.course.title}
          onChange={props.onChange}
          error={props.errors.title}
        />
      </div>

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            value={props.course.authorId || ""}
            className="form-control"
            onChange={props.onChange}
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <div className="field">
          <input
            type="text"
            id="category"
            name="category"
            className="form-control"
            onChange={props.onChange}
            value={props.course.CategoryId}
            error={props.errors.category}
          />
        </div>
      </div>

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
