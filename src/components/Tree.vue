<template>
  <div class="indent">
    <div v-for="content in contents" :key="content.name">
      <directory
        v-if="content.type === 'directory'"
        :name="content.name"
        :show-contents.sync="showContents"
        :path="path"
      />

      <tree-entity
        v-else
        v-bind="{ ...content, path }"
      />

      <tree
        v-if="content.contents && showContents"
        :contents="content.contents"
        :path="`${path}/${content.name}`"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Tree: () => import('@/components/Tree'),
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
