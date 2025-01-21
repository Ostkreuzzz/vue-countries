import type { Country } from '@/interface/Country'

export function handleUpdateCountries(newData: Country[], OldData: Country[]) {
  OldData.splice(0, OldData.length, ...newData)
}
