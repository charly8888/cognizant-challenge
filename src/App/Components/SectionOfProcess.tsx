import { FC, useContext, useState } from 'react'
import { Candidate } from '../../types/candidate'
import { CandidatesContext } from '../App'
import AddUser from './AddUser'
import CandidateCard from './CandidateCard'
import styles from './sectionOfProcess.module.scss'

interface props {
  title: string
  candidates: Array<Candidate>
}

const SectionOfProcess: FC<props> = ({ title }) => {
  const [toggleViewForm, setToggleViewForm] = useState(false)
  const { candidates } = useContext(CandidatesContext)

  const arrayOfCandidates = candidates.filter((e) => {
    if (e.step === title) return e
  })

  return (
    <section className={styles.section}>
      <h1>{title}</h1>
      {arrayOfCandidates.length === 0 ? (
        <h2>No hay usuarios</h2>
      ) : (
        arrayOfCandidates.map(({ step, name, comments, id }) => {
          if (step === title)
            return (
              <CandidateCard name={name} comments={comments} key={id} id={id} />
            )
        })
      )}
      {title === 'Entrevista inicial' && (
        <button onClick={() => setToggleViewForm(!toggleViewForm)}>
          Agregar usuario
        </button>
      )}
      {toggleViewForm && <AddUser setToggleViewForm={setToggleViewForm} />}
    </section>
  )
}

export default SectionOfProcess
