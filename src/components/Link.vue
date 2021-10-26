<template>
  <div class="title">
    <icon icon="link" />
    <a :src="target" target="_blank">
      {{ name }}
    </a>
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
    target: {
      type: String,
      required: true,
    },
  },
}
</script>
