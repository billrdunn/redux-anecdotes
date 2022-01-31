import React from 'react'
import { useDispatch } from 'react-redux'
import { editFilter } from '../reducers/filterReducer'

const VisibilityFilter = () => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        dispatch(editFilter(event.target.value))
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}

export default VisibilityFilter