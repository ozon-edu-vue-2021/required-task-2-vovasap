<template>
  <div id="app">
    <div class="path">{{ fullPath }}</div>
    <tree :contents="[data.data]" />
  </div>
</template>

<script>
import Tree from '@/components/Tree'
import nodeModules from './static/node_modules.json'

export default {
  name: 'App',
  components: {
    Tree,
  },
  computed: {
    fullPath() {
      return this.$store.getters['path']
    },
    data() {
      return {
        data: nodeModules,
      }
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.indent {
  margin-left: 10px;
}
.path {
  min-height: 20px;
}
</style>
