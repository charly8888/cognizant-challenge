import { Candidate } from '../types'

export default {
  candidates: {
    list: (): Promise<Candidate[]> =>
      Promise.resolve(JSON.parse(localStorage.getItem('candidates') || '[]')),
  },
}
