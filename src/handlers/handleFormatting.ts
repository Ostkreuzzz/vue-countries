export function handleNummberFormat(num: string) {
  const formatter = new Intl.NumberFormat('en-Us')

  return formatter.format(Number(num))
}
