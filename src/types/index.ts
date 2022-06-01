import React from 'react'

export interface TypesReducer {
  INICIAL: number
  PREV_STEP: number
  NEXT_STEP: number
  ADD: number
  EDIT: number
}

export interface Candidate {
  id: string
  name: string
  step:
    | 'Entrevista inicial'
    | 'Entrevista técnica'
    | 'Oferta'
    | 'Asignación'
    | 'Rechazo'
  comments: string | undefined
}
export type Steps =
  | 'Entrevista inicial'
  | 'Entrevista técnica'
  | 'Oferta'
  | 'Asignación'
  | 'Rechazo'

export interface valueProvider {
  candidates: Candidate[]
  dispatch: React.Dispatch<any>
}
