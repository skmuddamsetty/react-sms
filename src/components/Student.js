import React from 'react';
import { Link } from 'react-router-dom';
const Student = ({ firstName, lastName, id }) => (
  <div className="card">
    <div className="container">
      <h4>
        <b>
          {firstName} {lastName}
        </b>
      </h4>
      <Link to={`/edit-student/${id}`}>Edit Student Details</Link>
    </div>
  </div>
);
export default Student;
