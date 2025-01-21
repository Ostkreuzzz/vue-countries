export function handleNumberFormat(num: string) {
  const formatter = new Intl.NumberFormat('en-Us')

  return formatter.format(Number(num))
}
