<script setup lang="ts">
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'

import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Select from 'primevue/select'
import FloatLabel from 'primevue/floatlabel'
import ToggleButton from 'primevue/togglebutton'

import TreeTable from 'primevue/treetable'
import Column from 'primevue/column'

import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import 'primeicons/primeicons.css'

import { ref } from 'vue'

const sortOptions = [
  { name: 'Population', code: 'POP' },
  { name: 'Area', code: 'ARA' },
  { name: 'Alphabeticly', code: 'ABC' },
]

const options = ref([
  { name: 'America', value: 1 },
  { name: 'Antarctic', value: 2 },
  { name: 'Africa', value: 3 },
  { name: 'Asia', value: 4 },
  { name: 'Europe', value: 5 },
  { name: 'Ocenia', value: 6 },
])

const toast = useToast()
const query = ref('')
const sortType = ref(sortOptions[0])

const showToast = (message: string, type: string) => {
  toast.add({
    severity: type,
    summary: 'Error Message',
    detail: message,
    life: 3000,
  })
}

function handleSubmit() {
  if (!query.value) {
    showToast('Please choose a params before the search!', 'error')
  }
}
</script>

<template>
  <Toast />
  <div
    class="bg-desktop bg-full-width flex flex-col items-center justify-center gap-108 bg-no-repeat px-32"
  >
    <header class="mt-[140px]">
      <img src="/src/assets/img/logo.svg" alt="logo" class="w-220" />
    </header>

    <main class="w-full">
      <section
        class="bg-black border-black-soft flex flex-col gap-32 rounded-lg border-[1px] px-24 py-32"
      >
        <div class="flex items-center justify-between">
          <p class="font-semibold">Found 234 countries</p>

          <InputGroup class="max-w-[320px]">
            <InputText placeholder="Search" />
            <InputGroupAddon>
              <Button
                icon="pi pi-search"
                severity="secondary"
                @click="handleSubmit"
              />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div class="flex justify-between">
          <div class="flex flex-col gap-32">
            <FloatLabel>
              <Select
                class="!bg-black"
                v-model="sortType"
                :options="sortOptions"
                optionLabel="name"
                inputId="over_label"
                checkmark
                :highlightOnSelect="false"
              />
              <label for="over_label">Sort By</label>
            </FloatLabel>
            <ul>
              <ToggleButton
                class="!bg-black m-4 !border-none"
                v-model="checked"
                :onLabel="option.name"
                :offLabel="option.name"
                v-for="(option, index) of options"
                :key="index"
              />
            </ul>
          </div>

          <TreeTable
            :value="nodes"
            :paginator="true"
            :rows="5"
            tableStyle="min-width: 50rem"
          >
            <Column field="flag" header="Flag" style="width: auto"></Column>
            <Column field="name" header="Name" style="width: auto"></Column>
            <Column
              field="population"
              header="Population"
              style="width: auto"
            ></Column>
            <Column
              field="area"
              header="Area (km²)"
              style="width: auto"
            ></Column>
            <Column field="region" header="Region" style="width: auto"></Column>
          </TreeTable>
        </div>
      </section>
    </main>
  </div>
</template>

<style></style>
