import React, { useState } from "react";
import CourseForm from "../Form/CourseForm";
import { toast } from "react-toastify";

function ManageCoursePage(props) {
  const [errors, setError] = useState({});
  const [course, setCourse] = useState({
    id: "",
    title: "",
    authorId: null,
    slug: "",
    Category: "",
  });

  function handleChange(event) {
    const updateCourse = { ...course, [event.target.name]: event.target.value };
    setCourse(updateCourse);
  }
  function IsFormValid() {
    const _error = {};
    if (!props.title) _error.title = "Title is required";
    if (!props.Category) _error.category = "Category is required";

    setError(_error);
    return Object.keys(_error) === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!IsFormValid()) {
      return;
    }
    props.history.push("/courses");
    toast.success("Course saved");
  }
  return (
    <>
      {" "}
      <h2>Manage course page</h2>
      <CourseForm
        course={course}
        onChange={handleChange}
        errors={errors}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default ManageCoursePage;
