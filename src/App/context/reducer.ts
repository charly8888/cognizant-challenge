import { STEPS } from '../../constants/STEPS'
import TYPES_REDUCERS from '../../constants/TYPES_REDUCERS'
import { Candidate } from '../../types'
import { retornarStepNext } from './helpers/retornarStepNext'
import { retornarStepPrev } from './helpers/retornarStepPrev'

export function reducer(state: Candidate[], action: any) {
  switch (action.type) {
    case TYPES_REDUCERS.INICIAL:
      return action.payload

    case TYPES_REDUCERS.PREV_STEP:
      return state.map((candidate: Candidate) => {
        if (candidate.id === action.payload.id) {
          const stepPrev = retornarStepPrev(candidate.step)
          return { ...candidate, step: STEPS[stepPrev] }
        } else {
          return candidate
        }
      })
    case TYPES_REDUCERS.NEXT_STEP:
      return state.map((candidate: Candidate) => {
        if (candidate.id === action.payload.id) {
          const stepNext = retornarStepNext(candidate.step)
          return { ...candidate, step: STEPS[stepNext] }
        } else {
          return candidate
        }
      })
    case TYPES_REDUCERS.ADD:
      return [...state, action.payload]
    case TYPES_REDUCERS.EDIT:
      return state.map((candidate: Candidate) => {
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
