<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import type { Country } from '@/interface/Country'

const props = defineProps<{
  renderData: Country[]
}>()

const formatter = new Intl.NumberFormat('en-Us')
</script>

<template>
  <DataTable
    class="w-5/6"
    :value="props.renderData"
    :paginator="true"
    :rows="8"
    tableStyle="min-width: 50rem; "
  >
    <Column header="Flag" style="width: 10%">
      <template #body="slotProps">
        <img
          :src="slotProps.data.flags.png"
          :alt="slotProps.data.flags.png"
          class="h-40 w-56 rounded"
        /> </template
    ></Column>
    <Column
      sortable
      field="name.common"
      header="Name"
      style="width: 20%"
    ></Column>
    <Column sortable field="population" header="Population" style="width: 20%">
      <template #body="slotProps">
        <span> {{ formatter.format(Number(slotProps.data.population)) }}</span>
      </template></Column
    >
    <Column sortable field="area" header="Area (km²)" style="width: 20%">
      <template #body="slotProps">
        <span> {{ formatter.format(Number(slotProps.data.population)) }}</span>
      </template>
    </Column>
    <Column field="region" header="Region" style="width: 20%"></Column>
  </DataTable>
</template>

<style></style>
