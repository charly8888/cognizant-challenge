import { FC, useContext, useState } from 'react'
import { Candidate } from '../../types/candidate'
import { Steps } from '../../types/steps'
import { CandidatesContext } from '../App'
import AddUser from './AddUser'
import CandidateCard from './CandidateCard'
import styles from './sectionOfProcess.module.scss'

interface Props {
  title: string
}
interface MapArrayOfCandidates {
  step: Steps
  name: string
  comments: string
  id: string
}
interface Candidates {
  candidates: Candidate[]
}
const SectionOfProcess: FC<Props> = ({ title }) => {
  const [toggleViewForm, setToggleViewForm] = useState(false)
  const { candidates }: Candidates = useContext(CandidatesContext)

  const arrayOfCandidates = candidates.filter((e) => {
    if (e.step === title) return e
  })

  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>{title}</h1>
      {arrayOfCandidates.length === 0 ? (
        <h2 className={styles.noneUsers}>No hay usuarios</h2>
      ) : (
        arrayOfCandidates.map(
          ({ step, name, comments, id }: MapArrayOfCandidates) => {
            if (step === title)
              return (
                <CandidateCard
                  name={name}
                  comments={comments}
                  key={id}
                  id={id}
                />
              )
          }
        )
      )}
      {title === 'Entrevista inicial' && (
        <div className={styles.addUserButton}>
          <button onClick={() => setToggleViewForm(!toggleViewForm)}>
            Agregar usuario
          </button>
        </div>
      )}
      {toggleViewForm && (
        <div className={styles.containerAddUser}>
          <AddUser setToggleViewForm={setToggleViewForm} />
        </div>
      )}
    </section>
  )
}

export default SectionOfProcess
