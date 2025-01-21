export interface Country {
  flags: FlagType
  name: CountryName
  population: string
  area: string
  region: string
  unMember: boolean
  independent: boolean
  continents: string[]
  capital: string[]
  currencies: string[]
  languages: string[]
  borders: string[]
  subregion: string
}

interface CountryName {
  common: string
  official: string
}

interface FlagType {
  png: string
  svg: string
}
