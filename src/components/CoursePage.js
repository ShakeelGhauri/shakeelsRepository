import React from "react";

function CoursePage(props) {
  return (
    <>
      <h2>Course Detail Page</h2>
      {props.match.params.slug}
    </>
  );
}

export default CoursePage;
