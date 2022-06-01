import { STEPS } from "../../../constants/STEPS"
import { Steps } from "../../../types"

export const retornarStepPrev = (step: Steps) => {
  const index = STEPS.findIndex((steps) => steps === step)
  if (index > 0) {
    return index - 1
  }
  return index
}