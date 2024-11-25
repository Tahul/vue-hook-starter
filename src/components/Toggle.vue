<script setup>
import { useToggle } from 'vue-composable-starter'
const [value, toggle] = useToggle()
</script>

<template>
  <div>
    <button @click="toggle">
      Toggle: {{ value }}
    </button>
  </div>
</template>
