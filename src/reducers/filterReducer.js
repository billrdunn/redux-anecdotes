
const initialState = ''

const filterReducer = (state = initialState, action) => {
    console.log('state now: ', state)
    console.log('action', action)

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