import { FC, useContext, useState } from 'react'
import TYPES_REDUCERS from '../../constants/TYPES_REDUCERS'
import { CandidatesContext } from '../context/candidatesContext'
import AddUser from './AddUser'
import styles from './candidateCard.module.scss'

interface props {
  name: string
  comments: string | undefined
  id: string
}
const CandidateCard: FC<props> = ({ name, comments, id }) => {
  const { dispatch }: any = useContext(CandidatesContext)
  const [toggleViewForm, setToggleViewForm] = useState(false)

  return (
    <>
      <article className={styles.container}>
        <h2 className={styles.heading}>{name}</h2>
        <p className={styles.description}>{comments}</p>
        <button
          onClick={() =>
            dispatch({ type: TYPES_REDUCERS.PREV_STEP, payload: { id } })
          }
        >
          {'<'}
        </button>
        <button
          onClick={() =>
            dispatch({ type: TYPES_REDUCERS.NEXT_STEP, payload: { id } })
          }
        >
          {'>'}
        </button>
        <button
          onClick={() => {
            setToggleViewForm(!toggleViewForm)
            // dispatch({ type: 'NEXT_STEP', payload: { id } })
          }}
        >
          Editar
        </button>
      </article>
      {toggleViewForm && (
        <div className={styles.containerAddUser}>
          <AddUser
            setToggleViewForm={setToggleViewForm}
            name={name}
            id={id}
            buttonContent={'Editar'}
            comments={comments}
          />
        </div>
      )}
    </>
  )
}

export default CandidateCard
