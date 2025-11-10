<template>
  <div class="custom-block security">
    <p class="custom-block-title">{{ title }}</p>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Security'
  }
})
</script>
