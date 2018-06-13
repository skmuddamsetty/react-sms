import React from 'react';
import { connect } from 'react-redux';
import StudentForm from './StudentForm';
const EditStudentPage = props => {
  return (
    <div>
      <StudentForm student={props.student} onSubmit={student => {}} />
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    student: state.students.find(student => {
      return student.id === props.match.params.id;
    })
  };
};
export default connect(mapStateToProps)(EditStudentPage);
