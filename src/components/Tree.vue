<template>
  <div class="indent">
    <div v-for="content in contents" :key="content.name">
      <directory
        v-if="content.type === 'directory'"
        :name="content.name"
        :show-contents.sync="showContents"
      />

      <component v-else :is="`v-${content.type}`" v-bind="content" />

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
