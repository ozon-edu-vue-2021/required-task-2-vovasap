<template>
  <div>
    <tree-item
      :type="showContents ? `${type}-open` : type"
      :name="name"
      :path="path"
      @click="toggleContentsDisplay"
      @keyup.enter="toggleContentsDisplay"
    />
    <tree
      v-if="contents && showContents"
      :contents="contents"
      :path="`${path}/${name}`"
    />
  </div>
</template>

<script>
import Tree from '@/components/Tree'
import TreeItem from '@/components/TreeItem'

export default {
  components: {
    TreeItem,
    Tree,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    contents: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showContents: false,
    }
  },
  methods: {
    toggleContentsDisplay() {
      this.showContents = !this.showContents
    },
  },
}
</script>
