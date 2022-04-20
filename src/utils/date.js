import { addDays } from 'date-fns'

export function generateDate(numberOfDays) {
  const today = new Date()
  return addDays(today, numberOfDays)
}
