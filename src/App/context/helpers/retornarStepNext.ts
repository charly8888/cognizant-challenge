import { STEPS } from '../../../constants/STEPS'
import { Steps } from '../../../types'

export const retornarStepNext = (step: Steps) => {
  const index = STEPS.findIndex((steps) => steps === step)
  if (index < STEPS.length - 1) {
    return index + 1
  }
  return index
}
