import React from 'react';
class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.student ? props.student.firstName : '',
      lastName: props.student ? props.student.lastName : '',
      error: ''
    };
  }

  onFirstNameChange = e => {
    const firstName = e.target.value;
    this.setState(() => ({ firstName }));
  };
  onLastNameChange = e => {
    const lastName = e.target.value;
    this.setState(() => ({ lastName }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      this.setState(() => ({
        error: 'Please provide First Name and Last Name'
      }));
      return;
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        firstName: this.state.firstName,
        lastName: this.state.lastName
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="First Name"
            autoFocus
            value={this.state.firstName}
            onChange={this.onFirstNameChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.onLastNameChange}
          />
          <button type="submit">Add Student</button>
        </form>
      </div>
    );
  }
}
export default StudentForm;
