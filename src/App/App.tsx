import React, { useReducer } from 'react'
import styles from './app.module.scss'
import SectionOfProcess from './Components/SectionOfProcess'
import INITIAL_STATE from './context/INITIAL_STATE'

const steps = [
  'Entrevista inicial',
  'Entrevista técnica',
  'Oferta',
  'Asignación',
  'Rechazo',
]

const retornarStepNext = (step) => {
  const index = steps.findIndex((steps) => steps === step)
  if (index < steps.length - 1) {
    return index + 1
  }
  return index
}
const retornarStepPrev = (step) => {
  const index = steps.findIndex((steps) => steps === step)
  if (index > 0) {
    return index - 1
  }
  return index
}
function App() {
  function reducer(state, action) {
    switch (action.type) {
      case 'NEXT_STEP':
        return state.map((candidate) => {
          if (candidate.id === action.payload.id) {
            const stepNext = retornarStepNext(candidate.step)
            return { ...candidate, step: steps[stepNext] }
          } else {
            return candidate
          }
        })
      case 'PREV_STEP':
        return state.map((candidate) => {
          if (candidate.id === action.payload.id) {
            const stepPrev = retornarStepPrev(candidate.step)
            return { ...candidate, step: steps[stepPrev] }
          } else {
            return candidate
          }
        })
      default:
        return state
    }
  }

  const [candidates, dispatch] = useReducer(reducer, INITIAL_STATE)

  return (
    <main className={styles.main}>
      <SectionOfProcess
        title={'Entrevista inicial'}
        candidates={candidates}
        dispatch={dispatch}
      />
      <SectionOfProcess
        title={'Entrevista técnica'}
        candidates={candidates}
        dispatch={dispatch}
      />
      <SectionOfProcess
        title={'Oferta'}
        candidates={candidates}
        dispatch={dispatch}
      />
      <SectionOfProcess
        title={'Asignación'}
        candidates={candidates}
        dispatch={dispatch}
      />
      <SectionOfProcess
        title={'Rechazo'}
        candidates={candidates}
        dispatch={dispatch}
      />
    </main>
  )
}

export default App
