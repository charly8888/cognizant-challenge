import React from 'react'
import { Candidate } from './candidate'
export interface valueProvider {
  candidates: Candidate[]
  dispatch: React.Dispatch<any>
}
