import { FC, useContext, useState } from 'react'
import TYPES_REDUCERS from '../../constants/TYPES_REDUCERS'
import { CandidatesContext } from '../context/candidatesContext'
import AddUser from './AddUser'
import styles from './candidateCard.module.scss'
import ArrowLeft from './icons/ArrowLeft'
import ArrowRigth from './icons/ArrowRigth'
import EditButton from './icons/EditButton'

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
        <section className={styles.containerButtonsRightAndLeft}> 
          <button
            className={styles.buttonLeft}
            onClick={() =>
              dispatch({ type: TYPES_REDUCERS.PREV_STEP, payload: { id } })
            }
          >
            <ArrowLeft className={styles.iconPrev} />
          </button>
          <button
            className={styles.buttonRight}
            onClick={() =>
              dispatch({ type: TYPES_REDUCERS.NEXT_STEP, payload: { id } })
            }
          >
            <ArrowRigth className={styles.iconNext} />
          </button>
        </section>
        <button
          className={styles.buttonEdit}
          onClick={() => {
            setToggleViewForm(!toggleViewForm)
          }}
        >
          <EditButton className={styles.iconEdit} />
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
