<template>
  <div class="indent">
    <div v-for="content in contents" :key="content.name">
      <directory
        v-if="content.type === 'directory'"
        :name="content.name"
        :contents="content.contents"
        :show-contents.sync="showContents"
        :path="path"
      />

      <tree-entity
        v-else-if="content.name && content.type"
        v-bind="{ ...content, path }"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Directory: () => import('@/components/Directory'),
    TreeEntity: () => import('@/components/TreeEntity'),
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
