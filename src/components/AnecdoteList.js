import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementVote } from '../reducers/anecdoteReducer'
import { hideNotification, showNotification, updateNotification } from '../reducers/notificationReducer'


const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}



const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    console.log('anecdotes :>> ', anecdotes)
    const filter = useSelector(state => state.filter)
    const filteredAnecdotes = anecdotes.filter((a) => {
        console.log('a.content :>> ', a.content)
        return (
            a.content.includes(filter)
        )
    })

    const voteButtonClicked = (anecdote) => {
        dispatch(incrementVote(anecdote))
        dispatch(updateNotification(`${anecdote.content} liked`))
        setTimeout(() => {
            dispatch(hideNotification())
        }, 5000)
        dispatch(showNotification())

    }

    return (
        <ul>
            {filteredAnecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => voteButtonClicked(anecdote)} >
                </Anecdote>
            )}
        </ul>
    )
}

export default AnecdoteList