import { computed, type Ref } from 'vue'

const TAX_THRESHOLD = 5000

const TAX_BRACKETS = [
  { min: 0, max: 3000, rate: 0.03, deduction: 0 },
  { min: 3000, max: 12000, rate: 0.1, deduction: 210 },
  { min: 12000, max: 25000, rate: 0.2, deduction: 1410 },
  { min: 25000, max: 35000, rate: 0.25, deduction: 2660 },
  { min: 35000, max: 55000, rate: 0.3, deduction: 4410 },
  { min: 55000, max: 80000, rate: 0.35, deduction: 7160 },
  { min: 80000, max: Infinity, rate: 0.45, deduction: 15160 }
]

export function useTaxCalculation(monthlyIncome: Ref<number>, socialInsurance: Ref<number>) {
  const taxableIncome = computed(() => {
    return Math.max(0, monthlyIncome.value - socialInsurance.value - TAX_THRESHOLD)
  })

  const tax = computed(() => {
    const income = taxableIncome.value
    const bracket = TAX_BRACKETS.find(b => income > b.min && income <= b.max + b.min)
    if (!bracket || income <= 0) return 0
    return income * bracket.rate - bracket.deduction
  })

  const netIncome = computed(() => {
    return monthlyIncome.value - socialInsurance.value - tax.value
  })

  return {
    taxableIncome,
    tax,
    netIncome
  }
}