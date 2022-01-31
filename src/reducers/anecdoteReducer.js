import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'INCREMENT_VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: action.data.votes
      }
      return state.map(a => a.id !== id ? a : changedAnecdote)

    case 'NEW_ANECDOTE':
      return [...state, action.data]

    case 'INIT_ANECDOTES':
      return action.data

    default:
      return state
  }

}

export const incrementVote = (anecdote) => {
  const newAnecdote = {
    id: anecdote.id,
    votes: anecdote.votes + 1,
    content: anecdote.content
  }
  return async dispatch => {
    const response = await anecdoteService.update(newAnecdote)
    console.log('response :>> ', response)
    dispatch({
      type: 'INCREMENT_VOTE',
      data: response
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const response = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: response
    })
  }
}

export const initialiseAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default anecdoteReducer