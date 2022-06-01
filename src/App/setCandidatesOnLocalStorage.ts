const setCandidatesOnLocalStorage = (object) => {
  localStorage.setItem('candidates', JSON.stringify(object))
}
export default setCandidatesOnLocalStorage
