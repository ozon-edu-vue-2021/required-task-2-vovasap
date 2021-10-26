<template>
  <div class="title">
    <icon icon="directory" />
    <span>
      {{ name }}
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
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
