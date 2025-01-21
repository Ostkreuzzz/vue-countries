<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'

import type { Country } from './interface/Country'
import { type Severity } from '@/types/Severity'

import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'

import 'primeicons/primeicons.css'

import SortGroup from './components/SortGroup.vue'
import InfoTable from './components/InfoTable.vue'

import { getAllCounries } from './api/countries'
import TableTop from './components/TableTop.vue'

const countries = reactive<Country[]>([])
const query = ref('')

const visibleCountries = reactive<Country[]>([])

const toast = useToast()

const showToast = (message: string, type: Severity) => {
  toast.add({
    severity: type,
    summary: 'Error Message',
    detail: message,
    life: 3000,
  })
}

async function fetchAllCountries() {
  try {
    const result = await getAllCounries()

    countries.push(...result.data)
    visibleCountries.push(...result.data)
  } catch {
    showToast('Failed to load the data, try again!', 'error')
  }
}

onMounted(() => {
  fetchAllCountries()
})
</script>

<template>
  <Toast />
  <div
    class="flex flex-col items-center justify-center gap-80 bg-desktop bg-full-width bg-no-repeat px-32"
  >
    <header class="mt-72">
      <img src="/src/assets/img/logo.svg" alt="logo" class="w-220" />
    </header>

    <main class="w-full">
      <section
        class="flex flex-col gap-32 rounded-lg border-[1px] border-black-soft bg-black px-24 py-32"
      >
        <TableTop :data="visibleCountries" v-model="query" />

        <div class="flex justify-between gap-64">
          <SortGroup
            :visibleData="visibleCountries"
            :countries="countries"
            :query="query"
            @toast="showToast"
          />

          <InfoTable :renderData="visibleCountries" v-model="query" />
        </div>
      </section>
    </main>
  </div>
</template>

<style></style>
AS
