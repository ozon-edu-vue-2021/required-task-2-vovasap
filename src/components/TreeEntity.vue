<template>
  <tree-item
    :icon="type"
    :name="name"
    :path="path"
    can-selected
  />
</template>

<script>
import TreeItem from '@/components/TreeItem'

export default {
  components: {
    TreeItem,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
}
</script>
