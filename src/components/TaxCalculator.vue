<script setup lang="ts">
import { ref } from 'vue'
import TaxInput from './TaxInput.vue'
import TaxResults from './TaxResults.vue'
import { useTaxCalculation } from '../composables/useTaxCalculation'

const monthlyIncome = ref(0)
const socialInsurance = ref(0)

const { taxableIncome, tax, netIncome } = useTaxCalculation(monthlyIncome, socialInsurance)

const reset = () => {
  monthlyIncome.value = 0
  socialInsurance.value = 0
}
</script>

<template>
  <div class="tax-calculator">
    <h2>个税计算器</h2>
    
    <TaxInput
      v-model:income="monthlyIncome"
      v-model:insurance="socialInsurance"
    />

    <TaxResults
      :taxable-income="taxableIncome"
      :tax="tax"
      :net-income="netIncome"
    />

    <button @click="reset" class="reset-btn">重置</button>
  </div>
</template>

<style scoped>
.tax-calculator {
  max-width: 400px;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);
}

h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.5rem;
}

.reset-btn {
  width: 100%;
  margin-top: 1rem;
  padding: 0.6rem;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 0.9rem;
}

.reset-btn:hover {
  background-color: #66b1ff;
}
</style>