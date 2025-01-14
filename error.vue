<script setup lang="ts">

withDefaults(
  defineProps<{ 
    error?: any 
    }>(), { 
      error: () => ({})
      })
</script>

<template>
  <div>
    <h1>{{ error }}</h1>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>