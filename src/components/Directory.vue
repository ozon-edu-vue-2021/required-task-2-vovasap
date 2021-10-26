<template>
  <tree-item-layout
    icon="directory"
    @click="$emit('update:showContents', !showContents)"
  >
    <span>
      {{ name }}
    </span>
  </tree-item-layout>
</template>

<script>
import TreeItemLayout from '@/layouts/TreeItemLayout'

export default {
  components: {
    TreeItemLayout,
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
