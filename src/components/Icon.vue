<template>
  <img :src="require(`@/assets/svg/${icon}.svg`)" class="icon" :alt="icon" />
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
}
</script>
<style scoped>
.icon {
  height: 16px;
}
</style>
