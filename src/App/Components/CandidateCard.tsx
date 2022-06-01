import { FC, useContext, useState } from 'react'
import { CandidatesContext } from '../App'
import AddUser from './AddUser'
import styles from './candidateCard.module.scss'

interface props {
  name: string
  comments: string | undefined
  id: string
}
const CandidateCard: FC<props> = ({ name, comments, id }) => {
  const { dispatch } = useContext(CandidatesContext)
  const [toggleViewForm, setToggleViewForm] = useState(false)

  return (
    <>
      <article className={styles.container}>
        <h2 className={styles.heading}>{name}</h2>
        <p className={styles.description}>{comments}</p>
        <button
          onClick={() => dispatch({ type: 'PREV_STEP', payload: { id } })}
        >
          {'<'}
        </button>
        <button
          onClick={() => dispatch({ type: 'NEXT_STEP', payload: { id } })}
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
            comments={comments}
            id={id}
            buttonContent={'Editar'}
          />
        </div>
      )}
    </>
  )
}

export default CandidateCard
