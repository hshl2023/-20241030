<script setup lang="ts">
defineProps<{
  income: number
  insurance: number
}>()

defineEmits<{
  'update:income': [value: number]
  'update:insurance': [value: number]
}>()
</script>

<template>
  <div class="tax-input">
    <div class="input-group">
      <label>月收入（元）</label>
      <input
        type="number"
        :value="income"
        @input="e => $emit('update:income', +(e.target as HTMLInputElement).value)"
        min="0"
        step="100"
        placeholder="请输入月收入"
      >
    </div>

    <div class="input-group">
      <label>五险一金（元）</label>
      <input
        type="number"
        :value="insurance"
        @input="e => $emit('update:insurance', +(e.target as HTMLInputElement).value)"
        min="0"
        step="100"
        placeholder="请输入五险一金"
      >
    </div>
  </div>
</template>

<style scoped>
.tax-input {
  margin-bottom: 1rem;
}

.input-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.4rem;
  color: #606266;
  font-size: 0.9rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: border-color 0.2s;
}

input:focus {
  outline: none;
  border-color: #409eff;
}

input::placeholder {
  color: #c0c4cc;
}
</style>