import { createContext, useReducer } from 'react'
import styles from './app.module.scss'
import SectionOfProcess from './Components/SectionOfProcess'
import INITIAL_STATE from './context/INITIAL_STATE'
const STEPS = [
  'Entrevista inicial',
  'Entrevista técnica',
  'Oferta',
  'Asignación',
  'Rechazo',
]
export const CandidatesContext = createContext('')

const retornarStepNext = (step) => {
  const index = STEPS.findIndex((steps) => steps === step)
  if (index < STEPS.length - 1) {
    return index + 1
  }
  return index
}
const retornarStepPrev = (step) => {
  const index = STEPS.findIndex((steps) => steps === step)
  if (index > 0) {
    return index - 1
  }
  return index
}
function App() {
  const [candidates, dispatch] = useReducer(reducer, INITIAL_STATE)

  function reducer(state, action) {
    switch (action.type) {
      case 'NEXT_STEP':
        return state.map((candidate) => {
          if (candidate.id === action.payload.id) {
            const stepNext = retornarStepNext(candidate.step)
            return { ...candidate, step: STEPS[stepNext] }
          } else {
            return candidate
          }
        })
      case 'PREV_STEP':
        return state.map((candidate) => {
          if (candidate.id === action.payload.id) {
            const stepPrev = retornarStepPrev(candidate.step)
            return { ...candidate, step: STEPS[stepPrev] }
          } else {
            return candidate
          }
        })
      case 'ADD':
        return [...state, action.payload]
      case 'EDIT':
        return state.map((candidate) => {
          if (candidate.id === action.payload.id) {
            return {
              ...candidate,
              name: action.payload.name,
              comments: action.payload.comments,
            }
          } else {
            return candidate
          }
        })
      default:
        return state
    }
  }

  return (
    <CandidatesContext.Provider value={{ candidates, dispatch }}>
      <main className={styles.main}>
        <SectionOfProcess title={'Entrevista inicial'} />
        <SectionOfProcess title={'Entrevista técnica'} />
        <SectionOfProcess title={'Oferta'} />
        <SectionOfProcess title={'Asignación'} />
        <SectionOfProcess title={'Rechazo'} />
      </main>
    </CandidatesContext.Provider>
  )
}

export default App
