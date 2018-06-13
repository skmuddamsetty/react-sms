import React from 'react';
import StudentForm from './StudentForm';
import { connect } from 'react-redux';
import { addStudent } from '../actions/student';
const AddStudentPage = props => (
  <div>
    <h1>Add Student</h1>
    <StudentForm
      onSubmit={student => {
        props.dispatch(addStudent(student));
        props.history.push('/');
      }}
    />
  </div>
);
export default connect()(AddStudentPage);
