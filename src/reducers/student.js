const studentDefaultState = [];
const studentReducer = (state = studentDefaultState, action) => {
    switch (action.type) {
        case 'ADD_STUDENT':
            return [...state,
                action.student
            ];
        default:
            return state;
    }
};
export default studentReducer;