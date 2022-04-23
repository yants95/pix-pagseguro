import { addDays } from 'date-fns'

export function generateDateByDays(numberOfDays) {
  const today = new Date()
  return addDays(today, numberOfDays)
}
