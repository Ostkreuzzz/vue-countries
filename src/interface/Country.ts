export interface Country {
  flag: string
  name: CountryName
  population: string
  area: string
  region: string
  unMember: boolean
  independent: boolean
}

export interface CountryName {
  common: string
  oficial: string
}
