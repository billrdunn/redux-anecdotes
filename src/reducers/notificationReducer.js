const initialState = {text: '', isVisible: false}

let timeoutId = 0;

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TEXT':
            const updatedText = {
                ...state,
                text: action.data
            }
            return updatedText

        case 'SHOW':
            const visible = {
                ...state,
                isVisible: true
            }
            return visible

        case 'HIDE':
            const notVisible = {
                ...state,
                isVisible: false
            }
            return notVisible

        default:
            return state;
    }
}

export const updateNotification = (text, timeout) => {
    return async dispatch => {
        clearTimeout(timeoutId)
        dispatch({
            type: 'UPDATE_TEXT',
            data: text
        })
        dispatch({
            type: 'SHOW'
        })
        timeoutId = setTimeout(() => {
            dispatch({
                type: 'HIDE'
            })
        }, timeout * 1000)
    }
}

export default notificationReducer