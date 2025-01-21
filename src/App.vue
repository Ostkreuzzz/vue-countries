<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div
    class="flex flex-col items-center justify-center gap-80 bg-desktop bg-full-width bg-no-repeat px-32"
  >
    <header class="mt-72">
      <RouterLink to="/">
        <img src="/src/assets/img/logo.svg" alt="logo" class="w-220" />
      </RouterLink>
    </header>

    <main class="flex w-full justify-center">
      <RouterView />
    </main>
  </div>
</template>
