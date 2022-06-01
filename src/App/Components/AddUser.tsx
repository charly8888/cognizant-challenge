import { useContext, useState } from 'react'
import { Candidate } from '../../types/candidate'
import { CandidatesContext } from '../App'
import styles from './addUser.module.scss'

function handleSubmit(
  event: React.SyntheticEvent<HTMLFormElement>,
  setToggleViewForm,
  dispatch,
  id: string
) {
  event.preventDefault()
  if (event.currentTarget.elements.nameInput.value === '') return

  setToggleViewForm(false)
  if (id === undefined) {
    const newId = +new Date()
    const newCandidate: Candidate = {
      name: event.currentTarget.elements.nameInput.value,
      comments: event.currentTarget.elements.commentInput.value,
      id: newId.toString(),
      step: 'Entrevista inicial',
    }
    dispatch({ type: 'ADD', payload: newCandidate })
    console.log(newCandidate)
  } else {
    const name = event.currentTarget.elements.nameInput.value
    const comments = event.currentTarget.elements.commentInput.value
    dispatch({ type: 'EDIT', payload: { name, comments, id } })
  }
}

const AddUser = ({
  setToggleViewForm,
  name = '',
  comments = '',
  id,
  buttonContent = 'Agregar',
}) => {
  const { dispatch }: any = useContext(CandidatesContext)
  const [valueTextName, setValueTextName] = useState(name)
  const [valueTextComments, setValueTextComments] = useState(comments)
  return (
    <article className={styles.container}>
      <form onSubmit={(e) => handleSubmit(e, setToggleViewForm, dispatch, id)}>
        <label>
          <p className={styles.headings}>NAME:</p>
          <input
            value={valueTextName}
            onChange={(e) => setValueTextName(e.target.value)}
            id="nameInput"
          />
        </label>
        <label>
          <p>COMMENTS:</p>
          <input
            value={valueTextComments}
            onChange={(e) => setValueTextComments(e.target.value)}
            id="commentInput"
          />
        </label>
        <button>{buttonContent}</button>
      </form>

      <button
        className={styles.closeButton}
        onClick={() => setToggleViewForm(false)}
      >
        X
      </button>
    </article>
  )
}

export default AddUser
