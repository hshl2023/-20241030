<script setup lang="ts">
import TaxCalculator from './components/TaxCalculator.vue'
</script>

<template>
  <div class="container">
    <TaxCalculator />
  </div>
</template>

<style>
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}

body {
  background-color: #f5f7fa;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>