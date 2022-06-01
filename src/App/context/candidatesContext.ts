import { createContext } from 'react'
import { Candidate } from '../../types/index'

type ContextProps = {
  candidates: Candidate[]
  dispatch: React.Dispatch<any>
}

export const CandidatesContext = createContext<Partial<ContextProps>>({})
