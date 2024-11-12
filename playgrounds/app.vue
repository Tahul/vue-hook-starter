<script setup lang="ts">
const [toggleable, toggle] = useToggle()
</script>

<template>
  <div>
    <input type="checkbox" :value="toggleable ? 'checked' : 'unchecked'" @change="toggle">
    Current value is: {{ toggleable }}
  </div>
</template>
