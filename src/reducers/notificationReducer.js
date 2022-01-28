const initialState = {text: '', isVisible: false}


const notificationReducer = (state = initialState, action) => {
    console.log('NR state now: ', state)
    console.log('NR action', action)

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

export const updateNotification = (notification) => {
    return {
        type: 'UPDATE_TEXT',
        data: notification
    }
}

export const showNotification = () => {
    return {
        type: 'SHOW',
    }
}

export const hideNotification = () => {
    return {
        type: 'HIDE',
    }
}

export default notificationReducer