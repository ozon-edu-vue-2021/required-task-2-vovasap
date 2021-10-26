<template>
  <div id="app">
    <tree :contents="[test]" />
  </div>
</template>

<script>
import Tree from '@/components/Tree'

export default {
  name: 'App',
  components: {
    Tree,
  },
  data() {
    return {
      test: {
        type: 'directory',
        name: 'code-frame',
        contents: [
          { type: 'file', name: 'LICENSE' },
          { type: 'link', name: 'ozon', target: 'https://www.ozon.ru/' },
          {
            type: 'directory',
            name: 'lib',
            contents: [{ type: 'file', name: 'index.js' }],
          },
          { type: 'file', name: 'package.json' },
        ],
      },
    }
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
</style>
