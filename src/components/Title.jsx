import React from "react";

export default function Title({ title }) {
  return (
    <div className="row">
      <div className="col-12 my-2 text-left text-title">
        <h4 className="text-capitalize font-weight-bold">
           <strong>{title}</strong>
        </h4>
      </div>
    </div>
  );
}
