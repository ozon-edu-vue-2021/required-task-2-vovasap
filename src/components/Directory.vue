<template>
  <tree-item
    icon="directory"
    :name="name"
    @click="$emit('update:showContents', !showContents)"
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
    showContents: {
      type: Boolean,
    },
  },
}
</script>
