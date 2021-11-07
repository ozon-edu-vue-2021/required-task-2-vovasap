<template>
  <div class="indent">
    <div v-for="content in contents" :key="content.name">
      <directory
        v-if="content.type === 'directory'"
        :type="content.type"
        :name="content.name"
        :contents="content.contents"
        :show-contents.sync="showContents"
        :path="path"
      />

      <tree-item
        v-else-if="content.name && content.type"
        :type="content.type"
        :name="content.name"
        :path="path"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Directory: () => import('@/components/Directory'),
    TreeItem: () => import('@/components/TreeItem'),
  },
  props: {
    contents: {
      type: Array,
      required: true,
    },
    path: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      showContents: false,
    }
  },
}
</script>
