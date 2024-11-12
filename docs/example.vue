<script setup>
import { useToggle } from 'vue-composable-starter'

const [toggleable, toggle] = useToggle()
</script>

<template>
  <button :style="{ background: toggleable ? 'green' : 'red' }" @click="toggle">
    Toggle: {{ toggleable }}
  </button>
</template>
