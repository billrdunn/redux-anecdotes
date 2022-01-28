import React from 'react'
import { useSelector } from 'react-redux'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

const App = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  anecdotes.sort((first, second) => second.votes - first.votes)

  return (
    <div>
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App