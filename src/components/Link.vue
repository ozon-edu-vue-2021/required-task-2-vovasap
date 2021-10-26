<template>
  <tree-item-layout icon="link">
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
    target: {
      type: String,
      required: true,
    },
  },
}
</script>
