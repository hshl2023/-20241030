<script setup lang="ts">
defineProps<{
  taxableIncome: number
  tax: number
  netIncome: number
}>()
</script>

<template>
  <div class="tax-results">
    <div class="result-item">
      <span>应纳税所得额</span>
      <span>{{ taxableIncome.toFixed(2) }}元</span>
    </div>
    <div class="result-item">
      <span>应缴个税</span>
      <span>{{ tax.toFixed(2) }}元</span>
    </div>
    <div class="result-item highlight">
      <span>税后收入</span>
      <span>{{ netIncome.toFixed(2) }}元</span>
    </div>
  </div>
</template>

<style scoped>
.tax-results {
  background-color: #f8f9fa;
  border-radius: 4px;
  padding: 0.8rem;
}

.result-item {
  display: flex;
  justify-content: space-between;
  padding: 0.4rem;
  font-size: 0.9rem;
  color: #606266;
}

.highlight {
  background-color: #ecf5ff;
  color: #409eff;
  font-weight: 500;
  border-radius: 4px;
  margin-top: 0.4rem;
}
</style>