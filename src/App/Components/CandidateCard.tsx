import { FC } from 'react'
import styles from './candidateCard.module.scss'

interface props {
  name: string
  comments: string
  id: string
  dispatch: () => void
}
const CandidateCard: FC<props> = ({ name, comments, id, dispatch }) => {
  return (
    <article className={styles.container}>
      <h2 className={styles.heading}>{name}</h2>
      <p className={styles.description}>{comments}</p>
      <button onClick={() => dispatch({ type: 'PREV_STEP', payload: { id } })}> {'<'} </button>
      <button onClick={() => dispatch({ type: 'NEXT_STEP', payload: { id } })}>
        {'>'}
      </button>
    </article>
  )
}

export default CandidateCard
