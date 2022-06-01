import React, { useEffect, useReducer } from 'react'
import api from '../api'
import TYPES_REDUCERS from '../constants/TYPES_REDUCERS'
import { Candidate } from '../types'
import styles from './app.module.scss'
import SectionOfProcess from './Components/SectionOfProcess'
import { CandidatesContext } from './context/candidatesContext'
import { reducer } from './context/reducer'
import setCandidatesOnLocalStorage from './setCandidatesOnLocalStorage'

function App() {
  function setStorageApi(arrOfCandidates: Candidate[]) {
    dispatch({ type: TYPES_REDUCERS.INICIAL, payload: arrOfCandidates })
    console.log(arrOfCandidates)
  }

  const [candidates, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    api.candidates.list().then(setStorageApi)
    console.log('ejecucion de efect normal')
    console.log(candidates)
  }, [])

  useEffect(() => {
    console.log('ejecucion de storage')
    setCandidatesOnLocalStorage(candidates)
  }, [candidates])

  return (
    <CandidatesContext.Provider
      value={{
        candidates,
        dispatch,
      }}
    >
      <main className={styles.main}>
        <SectionOfProcess title="Entrevista inicial" />
        <SectionOfProcess title="Entrevista técnica" />
        <SectionOfProcess title="Oferta" />
        <SectionOfProcess title="Asignación" />
        <SectionOfProcess title="Rechazo" />
      </main>
    </CandidatesContext.Provider>
  )
}

export default App
