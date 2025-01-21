export interface Country {
  flags: { png: string; svg: string }
  name: { common: string; official: string }
  population: string
  area: string
  region: string
  unMember: boolean
  independent: boolean
  continents: string[]
  capital: string[]
  currencies: {
    [key: string]: { name: string; symbol: string }
  }
  languages: object
  borders?: string[]
  subregion: string
}
