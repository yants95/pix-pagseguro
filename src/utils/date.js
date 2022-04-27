import { addDays } from 'date-fns'

export function generateDates() {
  const currentDay = new Date()
  const year = currentDay.getFullYear()
  const month = currentDay.getMonth()
  const day = currentDay.getDate()
  const initialDate = new Date(year, month, day, '00', '00', '00')
  const endDate = new Date(year, month, day, '23', '59', '59')
  return {
    initialDate: addDays(initialDate, -1),
    endDate: addDays(endDate, +1)
  }
}