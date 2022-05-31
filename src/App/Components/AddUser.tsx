import { useContext, useState } from 'react'
import { Candidate } from '../../types/candidate'
import { CandidatesContext } from '../App'
import styles from './addUser.module.scss'

function handleSubmit(e, setToggleViewForm, dispatch, id) {
  e.preventDefault()
  if (e.target[0].value === '') return

  setToggleViewForm(false)
  if (id === undefined) {
    const newId = +new Date()
    const newCandidate: Candidate = {
      name: e.target[0].value,
      comments: e.target[1].value,
      id: newId.toString(),
      step: 'Entrevista inicial',
    }
    dispatch({ type: 'ADD', payload: newCandidate })
    console.log(newCandidate)
  } else {
    const name = e.target[0].value
    const comments = e.target[1].value
    dispatch({ type: 'EDIT', payload: { name, comments, id } })
  }
}

const AddUser = ({ setToggleViewForm, name = '', comments = '', id }) => {
  const { dispatch } = useContext(CandidatesContext)
  const [valueTextName, setValueTextName] = useState(name)
  const [valueTextComments, setValueTextComments] = useState(comments)
  return (
    <article className={styles.container}>
      <form onSubmit={(e) => handleSubmit(e, setToggleViewForm, dispatch, id)}>
        <label>
          <p>Name</p>
          <input
            value={valueTextName}
            onChange={(e) => setValueTextName(e.target.value)}
          />
        </label>
        <label>
          <p>Comments</p>
          <input
            value={valueTextComments}
            onChange={(e) => setValueTextComments(e.target.value)}
          />
        </label>
        <button>Agregar</button>
      </form>
    </article>
  )
}

export default AddUser
