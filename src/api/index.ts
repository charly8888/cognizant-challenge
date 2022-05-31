import { Candidate } from '../types/candidate'

export default {
  candidates: {
    list: (): Promise<Candidate[]> =>
      Promise.resolve([
        {
          id: '1',
          name: 'German',
          step: 'Entrevista inicial',
          comments: 'Buen Trabajador',
        },
      ]),
  },
}
