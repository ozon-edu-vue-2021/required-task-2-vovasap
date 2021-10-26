<template>
  <div class="title" @click="$emit('update:showContents', !showContents)">
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
    showContents: {
      type: Boolean,
    },
  },
}
</script>
