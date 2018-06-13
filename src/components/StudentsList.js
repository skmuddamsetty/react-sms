import React from 'react';
import { connect } from 'react-redux';
import Student from './Student';
const StudentsList = props => (
  <div>
    {props.students.map(student => {
      return <Student {...student} key={student.firstName} />;
    })}
  </div>
);
const mapStateToProps = state => {
  return {
    students: state.students
  };
};
export default connect(mapStateToProps)(StudentsList);
