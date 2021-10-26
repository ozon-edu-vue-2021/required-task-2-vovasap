<template>
  <tree-item-layout icon="file">
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
  },
}
</script>
