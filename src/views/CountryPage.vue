<script setup lang="ts">
import { onMounted, ref } from 'vue'

import type { Country } from '../interface/Country'

import ProgressSpinner from 'primevue/progressspinner'
import Image from 'primevue/image'
import Divider from 'primevue/divider'

import 'primeicons/primeicons.css'
import { getCountry } from '@/api/countries'
import { handleNummberFormat } from '@/handlers/handleFormatting'

const isLoading = ref(false)
const countryPath = 'deutschland'

const country = ref<Country | null>(null)

async function fetchCountry() {
  isLoading.value = true
  try {
    const result = await getCountry(countryPath)

    country.value = result.data[0]
    console.log(country)
  } catch {
    // showToast('Failed to load the data, try again!', 'error')
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchCountry()
})
</script>

<template>
  <ProgressSpinner v-if="!country" />

  <Card
    v-else
    class="flex justify-center rounded-lg border-[1px] border-black-soft bg-black px-24 py-32"
  >
    <div class="relative flex flex-col items-center justify-center gap-24">
      <Image
        :src="country?.flags.png"
        alt="Image"
        width="250"
        preview
        class="absolute -top-96 rounded-lg"
      />
      <div class="flex flex-col items-center">
        <h1 class="text-3xl font-semibold">
          {{ country.name.common }}
        </h1>
        <h2>
          {{ country.name.official }}
        </h2>
      </div>

      <section class="flex gap-40">
        <div class="flex items-center rounded-lg bg-black-soft p-16">
          <p>Population</p>
          <Divider layout="vertical" />
          <p>{{ handleNummberFormat(country.population) }}</p>
        </div>

        <div class="flex items-center rounded-lg bg-black-soft p-16">
          <p>Area (km²)</p>
          <Divider layout="vertical" />
          <p>{{ handleNummberFormat(country.area) }}</p>
        </div>
      </section>

      <table class="flex flex-col">
        <tr class="flex justify-between">
          <th scope="row">Chris</th>
          <td>22</td>
        </tr>
      </table>
    </div>
  </Card>
</template>
