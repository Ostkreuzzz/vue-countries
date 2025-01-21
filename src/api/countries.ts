import { client } from '@/httpClient/client'

export async function getAllCounries() {
  return client.get('/all')
}
