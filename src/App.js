import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import VisibilityFilter from './components/VisibilityFilter'
import anecdoteService from './services/anecdotes'
import { initialiseAnecdotes } from './reducers/anecdoteReducer'

const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    (async () => {
      const all = await anecdoteService.getAll()
      dispatch(initialiseAnecdotes(all))
    })()
  }, [dispatch])

  const anecdotes = useSelector(state => state.anecdotes)
  anecdotes.sort((first, second) => second.votes - first.votes)

  return (
    <div>
      <Notification />
      <VisibilityFilter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App