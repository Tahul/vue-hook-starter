<script setup>
const [toggleable, toggle] = useToggle()
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    as component:
    <Toggle />
    plain:
    <button @click="toggle">
      Toggle: {{ toggleable }}
    </button>
  </div>
</template>
