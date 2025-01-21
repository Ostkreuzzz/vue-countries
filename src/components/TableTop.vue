<script setup lang="ts">
import type { Country } from '@/interface/Country'
import InputText from 'primevue/inputtext'

const query = defineModel<string>()

const props = defineProps<{
  data: Country[]
}>()
</script>

<template>
  <div class="flex items-center justify-between">
    <p class="font-semibold">Found {{ props.data.length }} countries</p>
    <InputText placeholder="Search" v-model="query" />
  </div>
</template>

<style></style>
