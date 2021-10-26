<template>
  <div class="indent folder">
    <icon :icon="value.type" />
    <span class="folder__name">
      {{ value.name }}
    </span>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  components: {
    Icon,
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style scoped>
.folder {
  display: flex;
}
.folder__name {
  margin-left: 5px;
}
</style>
