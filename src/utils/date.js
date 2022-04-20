export function generateDate(numberOfDays) {
  const date = new Date()
  const currentMonth = date.getMonth()
  const currentMinutes = date.getMinutes()

  const year = date.getFullYear()
  const month = currentMonth < 10 ? `0${currentMonth}` : currentMonth
  const day = date.getDate() + parseInt(numberOfDays)
  const hour = date.getHours()
  const minutes = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes
  const seconds = date.getSeconds()

  return new Date(year, month, day, hour, minutes, seconds)
}