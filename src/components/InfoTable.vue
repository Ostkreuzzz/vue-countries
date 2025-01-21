<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import type { Country } from '@/interface/Country'
import { RouterLink } from 'vue-router'
import { handleNummberFormat } from '@/handlers/handleFormatting'

const props = defineProps<{
  renderData: Country[]
}>()
</script>

<template>
  <DataTable
    showLoader
    class="w-5/6"
    :value="props.renderData"
    :paginator="true"
    :rows="8"
    tableStyle="min-width: 50rem;"
  >
    <Column header="Flag" style="width: 10%">
      <template #body="slotProps">
        <RouterLink :to="slotProps.data.name.common">
          <img
            :src="slotProps.data.flags.png"
            :alt="slotProps.data.flags.png"
            class="h-40 w-56 rounded"
          />
        </RouterLink> </template
    ></Column>
    <Column sortable header="Name" style="width: 20%">
      <template #body="slotProps">
        <RouterLink :to="slotProps.data.name.common">
          <span>{{ slotProps.data.name.common }}</span>
        </RouterLink>
      </template></Column
    >
    <Column sortable field="population" header="Population" style="width: 20%">
      <template #body="slotProps">
        <span> {{ handleNummberFormat(slotProps.data.population) }}</span>
      </template></Column
    >
    <Column sortable field="area" header="Area (km²)" style="width: 20%">
      <template #body="slotProps">
        <span> {{ handleNummberFormat(slotProps.data.area) }}</span>
      </template>
    </Column>
    <Column field="region" header="Region" style="width: 20%"></Column>
  </DataTable>
</template>

<style></style>
