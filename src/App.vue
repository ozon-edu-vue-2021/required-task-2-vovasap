<template>
  <div id="app">
    <folder :value="test" />
  </div>
</template>

<script>
import Folder from '@/components/Folder'

export default {
  name: 'App',
  components: {
    Folder,
  },
  data() {
    return {
      test: {
        type: 'directory',
        name: 'code-frame',
        contents: [
          { type: 'file', name: 'LICENSE' },
          { type: 'link', target: 'https://www.ozon.ru/' },
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
  margin-top: 60px;
}
.indent {
  margin-left: 4px;
}
</style>
