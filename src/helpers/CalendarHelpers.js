const mouths = {
  ENERO: 0,
  FEBRERO: 1,
  MARZO: 2,
  ABRIL: 3,
  MAYO: 4,
  JUNIO: 5,
  JULIO: 6,
  AGOSTO: 7,
  SEPTIEMBRE: 8,
  OCTUBRE: 9,
  NOVIEMBRE: 10,
  DICIEMBRE: 11
}
/**
 * Sort events by date.
 * @param {[]} events The events to sort. Each event must have a mouth and year property and must be a string.
 * @returns {[]} events sorted by date
 */
export const sortEventsByDate = (events) => {
  console.log(events)
  events.sort((a, b) => {
    const dateA = new Date(Number(a.year), mouths[a.mouth.toUpperCase()])
    const dateB = new Date(Number(b.year), mouths[b.mouth.toUpperCase()])
    return dateB - dateA
  })
  return events
}
/**
 * Check if the mouth already exist in the events array.
 * @param {string} mouth Mouth must be a string.
 * @param {string} year Year must be a string.
 * @param {[]} events
 * @returns event if the mouth already exist in the events array.
 */
export const mouthAlreadyExist = (mouth, year, events) => {
  console.log(mouth, year, events)
  const event = events.find((e) => e.mouth.toUpperCase() === mouth.toUpperCase() && e.year === year)
  return event
}
