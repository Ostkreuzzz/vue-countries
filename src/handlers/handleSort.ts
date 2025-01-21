import type { Country } from '@/interface/Country'
import type { SortOption, Location } from '@/interface/Sort'

export function handleSort(
  data: Country[],
  locations: Location[],
  membership: boolean,
  independance: boolean,
  sortType: SortOption,
  query: string,
) {
  let visibleData = [...data]

  if (query) {
    const normalizedQuery = query.trim().toLowerCase()

    visibleData = visibleData.filter((country) =>
      country.name.common.toLowerCase().includes(normalizedQuery),
    )
  }

  if (locations) {
    const sortLocations = locations.filter((location) => location.checked)

    visibleData = visibleData.filter((country) =>
      sortLocations.map((location) => location.name).includes(country.region),
    )
  }

  if (membership) {
    visibleData = visibleData.filter((country) => country.unMember)
  }

  if (independance) {
    visibleData = visibleData.filter((country) => country.independent)
  }

  switch (sortType.code) {
    case 'POP':
      visibleData = visibleData.sort(
        (country1, country2) =>
          Number(country2.population) - Number(country1.population),
      )
      break
    case 'ARA':
      visibleData = visibleData.sort(
        (country1, country2) => Number(country2.area) - Number(country1.area),
      )
      break
    case 'ABC':
      visibleData = visibleData.sort((country1, country2) =>
        country1.name.common.localeCompare(country2.name.common),
      )
      break
  }

  return visibleData
}
