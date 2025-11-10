<template>
  <div
    class="VPFeature"
    :class="feature.status"
  >
    <article class="box">
      <div class="icon">{{ feature.icon }}</div>
      <h2 class="title">{{ feature.title }}</h2>
      <p class="details">{{ feature.details }}</p>
      <div v-if="feature.link && !feature.status" class="link-text">
        <a class="link" :href="feature.link">
          {{ feature.linkText }}
        </a>
      </div>
    </article>
  </div>
</template>

<script setup>
defineProps({
  feature: {
    type: Object,
    required: true
  }
})
</script>
