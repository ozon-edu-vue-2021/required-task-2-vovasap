<template>
  <div class="tree-item-layout" @click="$emit('click')">
    <icon v-if="icon" :icon="icon" />
    <slot />
  </div>
</template>
<script>
import Icon from '@/components/Icon'

export default {
  components: {
    Icon,
  },
  props: {
    icon: {
      type: String,
      default: null,
      validator: (value) =>
        !value || ['directory', 'file', 'link'].includes(value),
    },
  },
}
</script>
<style scoped>
.tree-item-layout {
  display: flex;
  gap: 10px;
}
</style>
