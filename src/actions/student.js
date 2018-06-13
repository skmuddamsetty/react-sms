export const addStudent = ({
    firstName = '',
    lastName = ''
} = {}) => ({
    type: 'ADD_STUDENT',
    student: {
        firstName,
        lastName
    }
});