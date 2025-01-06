<script setup lang="ts">
import { Toggle, useToggle } from 'vue-composable-starter'

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
