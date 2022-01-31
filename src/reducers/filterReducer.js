
const initialState = ''

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT_FILTER':
            return action.data

        default:
            return state
    }
}

export const editFilter = (filter) => {
    return {
        type: 'EDIT_FILTER',
        data: filter
    }
}


export default filterReducer