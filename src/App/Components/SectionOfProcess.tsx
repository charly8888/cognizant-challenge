import { FC } from 'react'
import { Candidate } from '../../types/candidate'
import CandidateCard from './CandidateCard'
import styles from './sectionOfProcess.module.scss'

interface props {
  title: string
  candidates: Array<Candidate>
  dispatch: () => void
}

const SectionOfProcess: FC<props> = ({ title, candidates, dispatch }) => {
  console.log(candidates)
  return (
    <section className={styles.section}>
      <h1>{title}</h1>
      {candidates.map(({ step, name, comments, id }) => {
        if (step === title)
          return (
            <CandidateCard name={name} comments={comments} key={id} id={id} dispatch={dispatch} />
          )
      })}
    </section>
  )
}

export default SectionOfProcess
