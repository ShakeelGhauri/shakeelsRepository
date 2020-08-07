import React from "react";
import { Link } from "react-router-dom";

function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>Title</td>
          <td>AutherID</td>
          <td>Category</td>
        </tr>
      </thead>
      <tbody>
        {props.courses.map(function (course) {
          return (
            <tr>
              <td>
                <Link to={"./CoursePage/" + course.slug}>{course.title}</Link>
              </td>
              <td>{course.autherId}</td>
              <td>{course.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CourseList;
