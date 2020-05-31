import React from "react";
import { Spinner } from "react-bootstrap";

export const Loading = () => {
  return (
    <div className="col-12">
      <Spinner animation="border" />
      <p>Loading . . .</p>
    </div>
  );
};
