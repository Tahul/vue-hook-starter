<script setup lang="ts">
import { useToggle, Toggle } from 'vue-composable-starter'

const [toggleable, toggle] = useToggle()

</script>

<template>
  <div>
    as component:
    <Toggle />
    plain:
    <button @click="toggle">
      Toggle: {{ toggleable }}
    </button>
  </div>
</template>
