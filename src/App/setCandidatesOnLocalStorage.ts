import { Candidate } from '../types/index';
const setCandidatesOnLocalStorage = (arrOfCandidates: Candidate[]) => {
  localStorage.setItem('candidates', JSON.stringify(arrOfCandidates))
}
export default setCandidatesOnLocalStorage
