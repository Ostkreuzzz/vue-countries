<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import type { Country } from '../interface/Country'

import ProgressSpinner from 'primevue/progressspinner'
import Image from 'primevue/image'
import Divider from 'primevue/divider'

import 'primeicons/primeicons.css'
import { getCountry } from '@/api/countries'

import { useRoute } from 'vue-router'
import Card from 'primevue/card'
import { handleNumberFormat } from '@/handlers/handleFormatting'

const route = useRoute()
const countryPath = route.path.slice(1)

const isLoading = ref(false)

const country = ref<Country | null>(null)

const currencyKeys = computed(() =>
  Object.keys(country.value?.currencies || {}),
)

const currencyNames = computed(() =>
  currencyKeys.value.map((key) => country.value?.currencies[key]?.name),
)

async function fetchCountry() {
  isLoading.value = true
  try {
    const result = await getCountry(countryPath)
    country.value = result.data[0]
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
  <ProgressSpinner v-if="isLoading" />
  <div v-if="!country">No Data</div>

  <Card
    v-else
    class="flex w-full max-w-screen-tablet-large flex-col gap-40 border-[1px] border-black-soft py-32"
  >
    <template #header>
      <div class="relative flex flex-col items-center justify-center gap-24">
        <Image :src="country.flags.png" alt="Image" preview />
        <div class="flex flex-col items-center">
          <h1 class="text-3xl font-semibold">
            {{ country.name.common }}
          </h1>
          <h2>
            {{ country.name.official }}
          </h2>
        </div>

        <section class="flex gap-40">
          <div class="flex items-center gap-16 rounded-lg bg-black-soft p-16">
            <p>Population</p>
            <Divider layout="vertical" />
            <p>{{ handleNumberFormat(country.population) }}</p>
          </div>

          <div class="flex items-center gap-16 rounded-lg bg-black-soft p-16">
            <p>Area (km²)</p>
            <Divider layout="vertical" />
            <p>{{ handleNumberFormat(country.area) }}</p>
          </div>
        </section>
      </div>
    </template>

    <template #content>
      <table class="flex w-full flex-col">
        <tr
          class="flex justify-between border-y-[1px] border-black-soft px-16 py-18"
        >
          <th>Capital</th>
          <td>{{ Object.values(country.capital).join(', ') }}</td>
        </tr>
        <tr
          class="flex justify-between border-y-[1px] border-black-soft px-16 py-18"
        >
          <th>Subregion</th>
          <td>{{ country.subregion }}</td>
        </tr>
        <tr
          class="flex justify-between border-y-[1px] border-black-soft px-16 py-18"
        >
          <th>Language</th>
          <td>{{ Object.values(country.languages).join(', ') }}</td>
        </tr>
        <tr
          class="flex justify-between border-y-[1px] border-black-soft px-18 py-24"
        >
          <th>Currencies</th>
          <td>{{ currencyNames.join(', ') }}</td>
        </tr>
        <tr
          class="flex justify-between border-y-[1px] border-black-soft px-16 py-18"
        >
          <th>Continents</th>
          <td>{{ Object.values(country.continents).join(', ') }}</td>
        </tr>
      </table>
    </template>
  </Card>
</template>
