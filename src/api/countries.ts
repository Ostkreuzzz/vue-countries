import { client } from '@/httpClient/client'

export async function getAllCounries() {
  return client.get('/all')
}

export async function getCountry(name: string) {
  return client.get(`/name/${name}`)
}

export async function getCountryByCode(code: string) {
  return client.get(`?codes=${code.toLowerCase()}`)
}
