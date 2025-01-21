<script setup lang="ts">
import Select from 'primevue/select'
import FloatLabel from 'primevue/floatlabel'
import ToggleButton from 'primevue/togglebutton'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

import { locations, sortTypes } from '@/constants/sortOptions'
import { reactive, ref } from 'vue'
import { handleSort } from '@/handlers/handleSort'
import type { Country } from '@/interface/Country'
import { handleUpdateCountries } from '@/handlers/handleUpdateData'

const props = defineProps<{
  countries: Country[]
  visibleData: Country[]
  query: string
}>()

const emit = defineEmits(['toast'])

const sortType = ref(sortTypes[0])
const sortLocations = reactive(locations)

const countryType = reactive({
  unMembership: true,
  independance: true,
})

function handleSearchSubmit() {
  const sortedData = handleSort(
    props.countries,
    sortLocations,
    countryType.unMembership,
    countryType.independance,
    sortType.value,
    props.query,
  )

  if (!sortedData.length) {
    emit('toast', 'No data to show, change params!', 'error')
    return
  }

  handleUpdateCountries(sortedData, props.visibleData)
}
</script>

<template>
  <div class="flex w-1/6 flex-col gap-32">
    <FloatLabel>
      <Select
        class="w-full !bg-black"
        v-model="sortType"
        :options="sortTypes"
        optionLabel="name"
        inputId="over_label"
        checkmark
        :highlightOnSelect="false"
      />
      <label for="over_label">Sort By</label>
    </FloatLabel>
    <ul>
      <ToggleButton
        class="m-4 !border-none !bg-black"
        v-model="location.checked"
        :onLabel="location.name"
        :offLabel="location.name"
        v-for="(location, index) of sortLocations"
        :key="index"
      />
    </ul>

    <div class="card flex flex-col justify-center gap-16">
      <div class="flex gap-8">
        <Checkbox
          v-model="countryType.unMembership"
          inputId="membership"
          name="UN"
          size="large"
          binary
        />
        <label for="membership" class="text-lg"
          >Member of the United Nations</label
        >
      </div>
      <div class="flex gap-8">
        <Checkbox
          v-model="countryType.independance"
          inputId="independant"
          name="Independant"
          size="large"
          binary
        />
        <label for="independant" class="text-lg">Independant</label>
      </div>
    </div>
    <Button label="Submit" @click="handleSearchSubmit" />
  </div>
</template>

<style></style>
