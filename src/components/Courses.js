import React, { useEffect, useState } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <Link to="/ManageCoursePage">Add course</Link>
      <CourseList courses={courses} />
    </>
  );
}

export default Courses;
