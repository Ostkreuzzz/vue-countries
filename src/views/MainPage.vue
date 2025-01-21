<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'

import type { Country } from '../interface/Country'
import { type Severity } from '@/types/Severity'

import SortGroup from '../components/SortGroup.vue'
import InfoTable from '../components/InfoTable.vue'

import { getAllCounries } from '../api/countries'
import TableTop from '../components/TableTop.vue'

import ProgressSpinner from 'primevue/progressspinner'

import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'
import Card from 'primevue/card'

import 'primeicons/primeicons.css'

const toast = useToast()

const isLoading = ref(false)
const query = ref('')

const visibleCountries = reactive<Country[]>([])
const countries = reactive<Country[]>([])

async function fetchAllCountries() {
  isLoading.value = true
  try {
    const result = await getAllCounries()
    console.log(result.data)

    countries.push(...result.data)
    visibleCountries.push(...result.data)
  } catch {
    showToast('Failed to load the data, try again!', 'error')
  } finally {
    isLoading.value = false
  }
}

const showToast = (message: string, type: Severity) => {
  toast.add({
    severity: type,
    summary: 'Error Message',
    detail: message,
    life: 3000,
  })
}

onMounted(() => {
  fetchAllCountries()
})
</script>

<template>
  <Toast />
  <Card class="border-[1px] border-black-soft px-24 py-32">
    <template #content>
      <div class="flex flex-col gap-32">
        <TableTop :data="visibleCountries" v-model="query" />

        <div class="flex justify-between gap-64">
          <SortGroup
            :visibleData="visibleCountries"
            :countries="countries"
            :query="query"
            @toast="showToast"
          />

          <ProgressSpinner v-if="isLoading" />
          <InfoTable v-else :renderData="visibleCountries" v-model="query" />
        </div>
      </div>
    </template>
  </Card>
</template>
