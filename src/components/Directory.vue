<template>
  <tree-item
    icon="directory"
    :name="name"
    @click="toggleContentsDisplay"
    @keyup.enter="toggleContentsDisplay"
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
  methods: {
    toggleContentsDisplay() {
      this.$emit('update:showContents', !this.showContents)
    },
  },
}
</script>
