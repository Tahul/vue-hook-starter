<template>
  <div>
    <NuxtRouteAnnouncer />
    <div @click="toggle">
      {{toggleable}}
    </div>
  </div>
</template>


<script setup>
const [toggleable, toggle] = useToggle()
</script>