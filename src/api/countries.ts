import { client } from '@/httpClient/client'

export async function getAllCounries() {
  return client.get('/all')
}

export async function getCountry(name: string) {
  return client.get(`/name/${name}`)
}
