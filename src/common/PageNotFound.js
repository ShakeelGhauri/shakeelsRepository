import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <h3>Page Not found</h3>
      <Link to="HomePage">Go Back</Link>
    </>
  );
}

export default PageNotFound;
