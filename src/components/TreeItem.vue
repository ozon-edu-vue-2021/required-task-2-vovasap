<template>
  <div class="indent">
    <div v-for="content in contents" :key="content.name">
      <directory v-if="content.type === 'directory'" :name="content.name" />

      <component v-else :is="`v-${content.type}`" v-bind="content" />

      <template v-if="content.contents">
        <tree-item :contents="content.contents" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    TreeItem: () => import('@/components/TreeItem'),
    Directory: () => import('@/components/Directory'),
    vFile: () => import('@/components/File'),
    vLink: () => import('@/components/Link'),
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
