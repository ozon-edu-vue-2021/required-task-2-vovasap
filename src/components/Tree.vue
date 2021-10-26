<template>
  <div class="indent">
    <div v-for="content in contents" :key="content.name">
      <directory
        v-if="content.type === 'directory'"
        :name="content.name"
        :show-contents.sync="showContents"
      />

      <tree-entity v-else v-bind="content" />

      <tree
        v-if="content.contents && showContents"
        :contents="content.contents"
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
  },
  data() {
    return {
      showContents: false,
    }
  },
}
</script>
