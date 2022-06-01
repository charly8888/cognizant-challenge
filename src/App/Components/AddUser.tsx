import { Dispatch, FC, SetStateAction, useContext, useState } from 'react'
import TYPES_REDUCERS from '../../constants/TYPES_REDUCERS'
import { Candidate } from '../../types'
import { CandidatesContext } from '../context/candidatesContext'
import styles from './addUser.module.scss'

function handleSubmit(
  event: React.SyntheticEvent<HTMLFormElement>,
  setToggleViewForm: Dispatch<SetStateAction<boolean>>,
  dispatch: any,
  id: string | undefined
) {
  event.preventDefault()

  const target = event.target as typeof event.target & {
    nameInput: { value: string };
    commentInput: { value: string };
  };
  if (target.nameInput.value === '') return

  setToggleViewForm(false)

  if (id === undefined) {
    const newId = +new Date()
    const newCandidate: Candidate = {
      name: target.nameInput.value,
      comments: target.commentInput.value,
      id: newId.toString(),
      step: 'Entrevista inicial',
    }
    dispatch({ type: TYPES_REDUCERS.ADD, payload: newCandidate })
    console.log(newCandidate)
  } else {
    const name = target.nameInput.value
    const comments = target.commentInput.value
    dispatch({ type: TYPES_REDUCERS.EDIT, payload: { name, comments, id } })
  }
  
}

interface PropsAddUser {
  name?: string
  comments?: string
  id?: string
  buttonContent?: string
  setToggleViewForm: Dispatch<SetStateAction<boolean>>
}

const AddUser: FC<PropsAddUser> = ({
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
            name="nameInput"
          />
        </label>
        <label>
          <p>COMMENTS:</p>
          <input
            value={valueTextComments}
            onChange={(e) => setValueTextComments(e.target.value)}
            name="commentInput"
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
