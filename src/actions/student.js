import uuid from 'uuid';
export const addStudent = ({
    firstName = '',
    lastName = ''
} = {}) => ({
    type: 'ADD_STUDENT',
    student: {
        firstName,
        lastName,
        id: uuid()
    }
});